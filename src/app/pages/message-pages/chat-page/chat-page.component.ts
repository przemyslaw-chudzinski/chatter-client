import { Component, OnInit, OnDestroy } from '@angular/core';
import { WebsocketService } from '../../../websocket/websocket.service';
import { ActivatedRoute } from '@angular/router';
import {tap, takeWhile} from 'rxjs/operators';
import { EWebSocketActions } from '../../../websocket/enums/websocket-actions.enum';
import { AuthService } from '../../../auth/auth.service';
import { IUser } from '../../../auth/models/user.model';
import { IMessage } from '../../../messages/models/message.model';
import {select, Store} from '@ngrx/store';
import {ChatterState} from '../../../chatter-store/chatter-store.state';
import {CleanMessagesStoreAction, LoadMessagesAction, PushMessageAction} from '../../../messages/messages-store/messages.actions';
import {Observable} from 'rxjs';
import {LoadUserAction} from '../../../users/users-store/users.actions';
import {selectMessages} from '../../../messages/messages-store/messages.selectors';
import {selectUser} from '../../../users/users-store/users.selectors';

@Component({
  selector: 'chatter-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit, OnDestroy {
  messages: IMessage[];
  contact: IUser;
  private alive = true;
  messages$: Observable<IMessage[]> = this.store.pipe(select(selectMessages));
  user$: Observable<IUser> = this.store.pipe(select(selectUser));

  constructor(
    private websocketService: WebsocketService,
    private route: ActivatedRoute,
    public auth: AuthService,
    private store: Store<ChatterState>
  ) {}

  ngOnInit() {
    this.user$.pipe(
      takeWhile(() => this.alive),
      tap(user => (this.contact = user))
    ).subscribe();

    this.messages$.pipe(
      takeWhile(() => this.alive),
      tap(messages => (this.messages = messages))
    ).subscribe();

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
            this.store.dispatch(new PushMessageAction({
              content: event.data,
              author: this.contact
            }));
          }
        })
      )
      .subscribe();

    this.route.params
      .pipe(
        takeWhile(() => this.alive),
        tap(() => (this.contact = null)),
        tap(() => (this.messages = null)),
        tap(() => this.store.dispatch(new CleanMessagesStoreAction())),
        tap(params => this.store.dispatch(new LoadUserAction(params.id))),
        tap(params => this.websocketService.switchToContact(params.id)),
        tap(params => this.store.dispatch(new LoadMessagesAction(params.id)))
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.alive = false;
  }

  sendMessage(event: IMessage): void {
    this.contact &&
    event &&
    event.content &&
    this.websocketService.sendMessage(event.content, this.contact._id);
    this.store.dispatch(new PushMessageAction(event));
  }
}
