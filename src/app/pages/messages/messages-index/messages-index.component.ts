import { Component, OnInit, OnDestroy } from '@angular/core';
import { WebsocketService } from '../../../websocket/websocket.service';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { tap, switchMap } from '../../../../../node_modules/rxjs/operators';
import { EWebSocketActions } from '../../../websocket/enums/websocket-actions.enum';
import { AuthService } from '../../../auth/auth.service';
import { IMessage } from '../../../layout/messages/models/message.model';
import { Subscription } from '../../../../../node_modules/rxjs';
import { UsersService } from '../../../users/users.service';
import { IUser } from '../../../auth/models/user.model';
import { MessagesService } from '../../../messages/messages.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'chatter-messages-index',
  templateUrl: './messages-index.component.html',
  styleUrls: ['./messages-index.component.scss']
})
export class MessagesIndexComponent implements OnInit, OnDestroy {
  messages: IMessage[] = [];
  private subscriptions: Subscription[] = [];
  contact: IUser;

  constructor(
    private websocketService: WebsocketService,
    private route: ActivatedRoute,
    public auth: AuthService,
    private usersService: UsersService,
    private messagesService: MessagesService
  ) {}

  ngOnInit() {
    this.subscriptions.push(
      this.websocketService.onMessage$
        .pipe(
          tap(event => {
            if (
              event.action === EWebSocketActions.MessageToContact &&
              this.contact &&
              this.contact._id === event.contactId
            ) {
              const messagesToUpdate = [...this.messages];
              messagesToUpdate.push({
                message: event.data,
                author: this.contact
              });
              this.messages = messagesToUpdate;
            }
          })
        )
        .subscribe(),

      this.route.params
        .pipe(
          tap(() => (this.messages = [])),
          switchMap(params => this.usersService.user$(params.id)),
          tap(contact => (this.contact = contact)),
          switchMap(contact => this.messagesService.getMessages$(contact._id)),
          tap(response => (this.messages = response.results))
        )
        .subscribe()
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  sendMessage(event: IMessage): void {
    // tslint:disable-next-line:no-unused-expression
    this.contact &&
      this.websocketService.sendMessage(event.message, this.contact._id);
    this.messages.push(event);
  }
}
