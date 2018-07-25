import {
  Component,
  OnDestroy,
  SimpleChanges,
  OnChanges,
  Input,
  OnInit
} from '@angular/core';
import { IResponseData } from '../../models/response-data';
import { IUser } from '../../auth/models/user.model';
import { WebsocketService } from '../../websocket/websocket.service';
import { tap, map, takeWhile, take } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { EWebSocketActions } from '../../websocket/enums/websocket-actions.enum';
import { ENotifications } from '../../websocket/enums/websocket-notifications.enum';
import { IContact } from './models/contact';
import { IWebSocketData } from '../../websocket/models/websocket-payload.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'chatter-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnDestroy, OnChanges, OnInit {
  @Input() data: IResponseData<IContact>;

  private onMessageSub: Subscription;

  private alive = true;

  constructor(private websocketService: WebsocketService) {}

  ngOnInit(): void {
    if (!this.onMessageSub) {
      this.websocketService.onMessage$
        .pipe(
          takeWhile(() => this.alive),
          map(data => data as IWebSocketData),
          tap(data => {
            if (
              data &&
              data.action === EWebSocketActions.NotifyContact &&
              data.type === ENotifications.NewMessage
            ) {
              const dataToUpdate = { ...this.data };
              dataToUpdate.results = dataToUpdate.results.map(item => {
                if (item._id === data.contactId) {
                  item.newMessagesCount++;
                }
                return item;
              });
              this.data = dataToUpdate;
            }
          })
        )
        .subscribe();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data) {
      if (!this.onMessageSub) {
        this.websocketService.onMessage$
          .pipe(
            map(data => data as IWebSocketData),
            tap(data => {
              if (
                data &&
                data.action === EWebSocketActions.ContactStatusChanged
              ) {
                if (this.data && this.data.results) {
                  const dataToUpdate = { ...this.data };
                  dataToUpdate.results = dataToUpdate.results.map(item => {
                    data.visibleContactsIds.includes(item._id)
                      ? (item.available = true)
                      : (item.available = false);
                    return item;
                  });
                  this.data = dataToUpdate;
                }
              }
            })
          )
          .subscribe();
      }
    }
  }

  ngOnDestroy() {
    // tslint:disable-next-line:no-unused-expression
    this.onMessageSub && this.onMessageSub.unsubscribe();
    this.alive = false;
  }
}
