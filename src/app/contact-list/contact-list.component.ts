import {
  Component,
  OnDestroy,
  SimpleChanges,
  OnChanges,
  Input,
  OnInit
} from '@angular/core';
import { WebsocketService } from '../websocket/websocket.service';
import { tap, map, takeWhile } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { EWebSocketActions } from '../websocket/enums/websocket-actions.enum';
import { ENotifications } from '../websocket/enums/websocket-notifications.enum';
import { IContact } from './models/contact';
import { IWebSocketData } from '../websocket/models/websocket-payload.model';
import {ContactListService} from './contact-list.service';

@Component({
  selector: 'chatter-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnDestroy, OnChanges, OnInit {
  @Input() contacts: IContact[];
  private onMessageSub: Subscription;
  private alive = true;

  constructor(
    private websocketService: WebsocketService,
    private contactListService: ContactListService
  ) {}

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
              let dataToUpdate = [ ...this.contacts ];
              dataToUpdate = dataToUpdate.map(item => {
                if (item._id === data.contactId) {
                  item.newMessagesCount++;
                }
                return item;
              });
              this.contacts = dataToUpdate;
            }
          })
        )
        .subscribe();

      /* Reset unread messages logic */
      this.contactListService.resetUnreadMessages.pipe(
        tap(contactId => {
          if (
            contactId &&
            this.contacts &&
            this.contacts.length
          ) {
            // Fragment to refactoring
            let dataToUpdate = [ ...this.contacts ];
            dataToUpdate = dataToUpdate.map(item => {
              if (item._id === contactId) {
                item.newMessagesCount = null;
              }
              return item;
            });
            this.contacts = dataToUpdate;
          }
        })
      ).subscribe();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.contacts) {
      if (!this.onMessageSub) {
        this.websocketService.onMessage$
          .pipe(
            map(data => data as IWebSocketData),
            tap(data => {
              if (
                data &&
                data.action === EWebSocketActions.ContactStatusChanged
              ) {
                if (this.contacts && this.contacts.length) {
                  let dataToUpdate = [ ...this.contacts ];
                  dataToUpdate = dataToUpdate.map(item => {
                    data.visibleContactsIds.includes(item._id)
                      ? (item.available = true)
                      : (item.available = false);
                    return item;
                  });
                  this.contacts = dataToUpdate;
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
