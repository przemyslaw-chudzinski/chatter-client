import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import {map, take, takeWhile, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {IContact} from '../contact-list/models/contact';
import {select, Store} from '@ngrx/store';
import {LoadUsersAction} from '../users/users-store/users.actions';
import {ChatterState} from '../chatter-store/chatter-store.state';
import {selectUsers} from '../users/users-store/users.selectors';
import {WebsocketService} from '../websocket/websocket.service';
import {MessagesApiService} from '../messages/messages-api.service';
import {IUnreadMessage} from '../messages/models/unread-message.model';

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
    map(contacts => {
      if (contacts && contacts.length) {
        contacts = contacts.map(c => {
          c.newMessagesCount = 0;
          return c;
        });
      }
      return contacts;
    }),
  );

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
      tap(user => user && this._websocketService.connect(user._id))
    ).subscribe();

    this._messagesApiService
      .getUnreadMessages()
      .pipe(
        take(1),
        tap(unreadMessagesData => (this.unreadMessagesData = unreadMessagesData))
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
