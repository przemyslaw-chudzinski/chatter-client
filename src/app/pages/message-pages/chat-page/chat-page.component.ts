import { Component, OnInit, OnDestroy } from '@angular/core';
import { WebsocketService } from '../../../websocket/websocket.service';
import { ActivatedRoute } from '@angular/router';
import {tap, switchMap, takeWhile, map} from 'rxjs/operators';
import { EWebSocketActions } from '../../../websocket/enums/websocket-actions.enum';
import { AuthService } from '../../../auth/auth.service';
import { UsersService } from '../../../users/users.service';
import { IUser } from '../../../auth/models/user.model';
import { IMessage } from '../../../messages/models/message.model';
import {ContactListService} from '../../../contact-list/contact-list.service';
import {select, Store} from '@ngrx/store';
import {ChatterState} from '../../../chatter-store/chatter-store.state';
import {CleanMessagesStoreAction, LoadMessagesAction} from '../../../messages/messages-store/messages.actions';
import {Observable} from 'rxjs';
import {selectMessages} from '../../../messages/messages-store/messages.selectors';

@Component({
  selector: 'chatter-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit, OnDestroy {
  messages: IMessage[] = [];
  contact: IUser;

  messagesListLoading: boolean;

  headerTitleLoading: boolean;

  private alive = true;

  messages$: Observable<IMessage[]> = this.store.pipe(
    select(selectMessages),
    map(messagesState => messagesState.messages),
    map(messages => messages as IMessage[]),
    tap(messages => console.log(messages))
  );

  constructor(
    private websocketService: WebsocketService,
    private route: ActivatedRoute,
    public auth: AuthService,
    private usersService: UsersService,
    private contactListService: ContactListService,
    private store: Store<ChatterState>
  ) {}

  ngOnInit() {
    this.websocketService.onMessage$
      .pipe(
        takeWhile(() => this.alive),
        tap(event => {
          if (
            event &&
            event.action === EWebSocketActions.MessageToContact &&
            this.contact &&
            this.contact._id === event.contactId
          ) {
            const messagesToUpdate = [...this.messages];
            messagesToUpdate.push({
              content: event.data,
              author: this.contact
            });
            this.messages = messagesToUpdate;
          }
        })
      )
      .subscribe();

    this.route.params
      .pipe(
        takeWhile(() => this.alive),
        tap(() => (this.messagesListLoading = true)),
        tap(() => (this.headerTitleLoading = true)),
        tap(() => this.store.dispatch(new CleanMessagesStoreAction())),
        switchMap(params => this.usersService.loadUser(params.id)),
        tap(contact => (this.contact = contact)),
        tap(() => (this.headerTitleLoading = false)),
        tap(contact => this.websocketService.switchToContact(contact._id)),
        tap(contact => this.store.dispatch(new LoadMessagesAction(contact._id))),
        tap(response => (this.messages = response.results)),
        tap(() => (this.messagesListLoading = false))
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.alive = false;
  }

  sendMessage(event: IMessage): void {
    // tslint:disable-next-line:no-unused-expression
    this.contact &&
    event &&
    event.content &&
    this.websocketService.sendMessage(event.content, this.contact._id);
    this.messages.push(event);
  }
}
