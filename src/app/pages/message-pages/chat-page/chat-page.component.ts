import { Component, OnInit, OnDestroy } from '@angular/core';
import { WebsocketService } from '../../../websocket/websocket.service';
import { ActivatedRoute } from '@angular/router';
import {tap, switchMap, takeWhile} from 'rxjs/operators';
import { EWebSocketActions } from '../../../websocket/enums/websocket-actions.enum';
import { AuthService } from '../../../auth/auth.service';
import { UsersService } from '../../../users/users.service';
import { IUser } from '../../../auth/models/user.model';
import { MessagesService } from '../../../messages/messages.service';
import { IMessage } from '../../../messages/models/message.model';
import {ContactListService} from '../../../contact-list/contact-list.service';

@Component({
  // tslint:disable-next-line:component-selector
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

  constructor(
    private websocketService: WebsocketService,
    private route: ActivatedRoute,
    public auth: AuthService,
    private usersService: UsersService,
    private messagesService: MessagesService,
    private contactListService: ContactListService
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
        tap(() => (this.messages = [])),
        switchMap(params => this.usersService.loadUser(params.id)),
        tap(contact => (this.contact = contact)),
        tap(() => (this.headerTitleLoading = false)),
        tap(contact => this.websocketService.switchToContact(contact._id)),
        switchMap(contact => this.messagesService.getMessages$(contact._id).pipe(
          tap(() => this.contactListService.resetUnreadMessages.emit(contact._id))
        )),
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
