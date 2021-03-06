import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import {map, switchMap, takeWhile, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {IContact} from '../contact-list/models/contact';
import {select, Store} from '@ngrx/store';
import {LoadUsersAction} from '../users/users-store/users.actions';
import {ChatterState} from '../chatter-store/chatter-store.state';
import {selectUsers} from '../users/users-store/users.selectors';
import {WebsocketService} from '../websocket/websocket.service';
import {MessagesApiService} from '../messages/messages-api.service';
import {IUnreadMessage} from '../messages/models/unread-message.model';
import {IChannel} from '../channels/models/channel.model';
import {selectChannels} from '../channels/channels-store/channels.selectors';
import {LoadChannelsAction} from '../channels/channels-store/channels.actions';
import {LoadNotificationsNumberAction} from '../notifications/notifications-store/notifications-store.actions';

@Component({
  selector: 'chatter-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  private alive = true;
  unreadMessagesData: IUnreadMessage[] = [];

  contacts$: Observable<IContact[]> = this._store.pipe(
    select(selectUsers),
    map(users => users as IContact[]),
    map(contacts => contacts && contacts.length ? this.resetUnreadMessagaesCounter(contacts) : null),
  );

  channels$: Observable<IChannel[]> = this._store.pipe(select(selectChannels));

  constructor(
    public auth: AuthService,
    private _store: Store<ChatterState>,
    private _websocketService: WebsocketService,
    private _messagesApiService: MessagesApiService
  ) {}

  ngOnInit(): void {
    this.auth.user$.pipe(
      takeWhile(() => this.alive),
      tap(user => user && this._store.dispatch(new LoadUsersAction())),
      tap(user => user && this._store.dispatch(new LoadChannelsAction())),
      tap(user => user && this._store.dispatch(new LoadNotificationsNumberAction())),
      tap(user => user && this._websocketService.connect(user._id)),
      switchMap(user => user && this._messagesApiService.getUnreadMessages() || of(null)),
      map(response => response ? response.data : null),
      tap(unreadMessagesData => (this.unreadMessagesData = unreadMessagesData))
    ).subscribe();
  }

  ngOnDestroy() {
    this.alive = false;
  }

  private resetUnreadMessagaesCounter(contacts: IContact[]): IContact[] {
    return contacts.map(c => {
      c.newMessagesCount = 0;
      return c;
    });
  }
}
