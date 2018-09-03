import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import {map, takeWhile, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {IContact} from '../contact-list/models/contact';
import {select, Store} from '@ngrx/store';
import {LoadUsersAction} from '../users/users-store/users.actions';
import {ChatterState} from '../chatter-store/chatter-store.state';
import {selectUsers} from '../users/users-store/users.selectors';
import {WebsocketService} from '../websocket/websocket.service';

@Component({
  selector: 'chatter-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  private alive = true;

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
    private _websocketService: WebsocketService
  ) {}

  ngOnInit(): void {
    this.auth.user$.pipe(
      takeWhile(() => this.alive),
      tap(user => user && this._store.dispatch(new LoadUsersAction())),
      tap(user => user && this._websocketService.connect(user._id))
    ).subscribe();
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
