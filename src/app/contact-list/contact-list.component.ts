import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {WebsocketService} from '../websocket/websocket.service';
import {map, takeWhile, tap} from 'rxjs/operators';
import {Subscription} from 'rxjs';
import {EWebSocketActions} from '../websocket/enums/websocket-actions.enum';
import {ENotifications} from '../websocket/enums/websocket-notifications.enum';
import {IContact} from './models/contact';
import {IWebSocketData} from '../websocket/models/websocket-payload.model';
import {ContactListService} from './contact-list.service';
import {IUnreadMessage} from '../messages/models/unread-message.model';
import {IChannel} from '../channels/models/channel.model';
import {Store} from '@ngrx/store';
import {ChatterState} from '../chatter-store/chatter-store.state';
import {LoadChannelsAction} from '../channels/channels-store/channels.actions';

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
    private contactListService: ContactListService,
    private store: Store<ChatterState>
  ) {}

  ngOnInit(): void {
    // if (!this.onMessageSub) {
    //   // this.websocketService.onMessage$
    //   //   .pipe(
    //   //     takeWhile(() => this._alive),
    //   //     map(data => data as IWebSocketData),
    //   //     tap(this.notifyContactHandler.bind(this)),
    //   //     tap(this.channelHasBeenDeletedHandler.bind(this))
    //   //   ).subscribe();
    //   //
    //   // /* Reset unread messages logic */
    //   // this.contactListService.resetUnreadMessages.pipe(
    //   //   tap(this.resetUnreadMessagesHandler.bind(this))
    //   // ).subscribe();
    // }

    /**
     * Listener of ws actions
     */
    this.websocketService.onMessage$
      .pipe(
        takeWhile(() => this._alive),
        map(data => data as IWebSocketData),
        tap(this.notifyContactHandler.bind(this)),
        tap(this.channelHasBeenDeletedHandler.bind(this)),
        tap(this.channelHasBeenCreatedHandler.bind(this))
      ).subscribe();

    /* Reset unread messages logic */
    this.contactListService.resetUnreadMessages.pipe(
      tap(this.resetUnreadMessagesHandler.bind(this))
    ).subscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    changes.contacts && !this.onMessageSub && this.websocketService.onMessage$.pipe(
      map(data => data as IWebSocketData),
      tap(this.contactStatusChangedHandler.bind(this))
    ).subscribe();
    this.unreadMessagesData && this.unreadMessagesData.length && this.contacts.length && this.contactMessagesCounterInit();
  }

  ngOnDestroy() {
    this.onMessageSub && this.onMessageSub.unsubscribe();
    this._alive = false;
  }

  private channelHasBeenDeletedHandler(data: IWebSocketData): void {
    data && data.action && data.action === EWebSocketActions.ChannelHasBeenDeleted && this.store.dispatch(new LoadChannelsAction());
  }

  private notifyContactHandler(data: IWebSocketData): void {
    data && data.action && data.action === EWebSocketActions.NotifyContact && data.type && data.type === ENotifications.NewMessage && this.incrementUnreadMessageCounter(data.contactId);
  }

  private incrementUnreadMessageCounter(contactId): void {
    let dataToUpdate = [ ...this.contacts ];
    dataToUpdate = dataToUpdate.map(item => {
      item._id === contactId ? item.newMessagesCount++ : null;
      return item;
    });
    this.contacts = dataToUpdate;
  }

  private contactStatusChangedHandler(data: IWebSocketData): void {
    data && data.action && data.action === EWebSocketActions.ContactStatusChanged && this.updateContactsList(data.visibleContactsIds);
  }

  private updateContactsList(visibleContactsIds): void {
    let dataToUpdate = this.contacts ? [ ...this.contacts ] : [];
    dataToUpdate = dataToUpdate && dataToUpdate.length && dataToUpdate.map(item => {
      visibleContactsIds.includes(item._id) ? (item.available = true) : (item.available = false);
      return item;
    });
    this.contacts = dataToUpdate;
  }

  private contactMessagesCounterInit(): void {
    let dataToUpdate = [ ...this.contacts ];
    dataToUpdate = dataToUpdate.map(contact => {
      this.unreadMessagesData.forEach(item => item.authorId === contact._id ?  contact.newMessagesCount = item.count : null);
      return contact;
    });
    this.contacts = dataToUpdate;
  }

  private resetUnreadMessagesHandler(contactId: string): void {
    contactId && this.contacts && this.contacts.length && this.updateMessagesCounterInContactsList(contactId);
  }

  private updateMessagesCounterInContactsList(contactId: string): void {
    let dataToUpdate = [ ...this.contacts ];
    dataToUpdate = dataToUpdate.map(item => {
      item._id === contactId ? item.newMessagesCount = null : null;
      return item;
    });
    this.contacts = dataToUpdate;
  }

  private channelHasBeenCreatedHandler(data: IWebSocketData): void {
    data && data.action && data.action === EWebSocketActions.ChannelHasBeenCreated && this.store.dispatch(new LoadChannelsAction());
  }
}
