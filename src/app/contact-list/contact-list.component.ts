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
import {IUnreadMessage} from '../messages/models/unread-message.model';
import {IChannel} from '../channels/models/channel.model';

@Component({
  selector: 'chatter-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnDestroy, OnChanges, OnInit {
  @Input() contacts: IContact[];
  @Input() channels: IChannel[];
  @Input() unreadMessagesData: IUnreadMessage[];
  private onMessageSub: Subscription;
  private _alive = true;

  constructor(
    private websocketService: WebsocketService,
    private contactListService: ContactListService
  ) {}

  ngOnInit(): void {
    if (!this.onMessageSub) {
      this.websocketService.onMessage$
        .pipe(
          takeWhile(() => this._alive),
          map(data => data as IWebSocketData),
          tap(data => {
            if (
              data &&
              data.action === EWebSocketActions.NotifyContact &&
              data.type === ENotifications.NewMessage
            ) {
              let dataToUpdate = [ ...this.contacts ];
              dataToUpdate = dataToUpdate.map(item => {
                item._id === data.contactId ? item.newMessagesCount++ : null;
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
              item._id === contactId ? item.newMessagesCount = null : null;
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

    if (this.unreadMessagesData && this.unreadMessagesData.length && this.contacts.length) {
      let dataToUpdate = [ ...this.contacts ];
      dataToUpdate = dataToUpdate.map(contact => {
        this.unreadMessagesData.forEach(item => item.authorId === contact._id ?  contact.newMessagesCount = item.count : null);
        return contact;
      });
      this.contacts = dataToUpdate;
    }
  }

  ngOnDestroy() {
    this.onMessageSub && this.onMessageSub.unsubscribe();
    this._alive = false;
  }
}
