import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../../websocket/websocket.service';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { tap } from '../../../../../node_modules/rxjs/operators';
import { EWebSocketActions } from '../../../websocket/enums/websocket-actions.enum';
import { AuthService } from '../../../auth/auth.service';
import { IMessage } from '../../../layout/messages/models/message.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'chatter-messages-index',
  templateUrl: './messages-index.component.html',
  styleUrls: ['./messages-index.component.scss']
})
export class MessagesIndexComponent implements OnInit {
  private contactId: string;
  messages: IMessage[] = [];

  constructor(
    private websocketService: WebsocketService,
    private route: ActivatedRoute,
    public auth: AuthService
  ) {}

  ngOnInit() {
    this.contactId = this.route.snapshot.params.id;
    // this.websocketService.connect();
    this.websocketService.onMessage$
      .pipe(
        tap(event => console.log(event)),
        tap(event => {
          // When message is recived
          if (event.action === EWebSocketActions.MessageToContact) {
            const messagesToUpdate = [...this.messages];
            messagesToUpdate.push(event.data);
            this.messages = messagesToUpdate;
          }
        })
      )
      .subscribe();
  }

  sendMessage(event: IMessage): void {
    // tslint:disable-next-line:no-unused-expression
    this.contactId &&
      this.websocketService.sendMessage(event.message, this.contactId);
    this.messages.push(event);
  }
}
