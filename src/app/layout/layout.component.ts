import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import {map, takeWhile, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {IContact} from '../contact-list/models/contact';
import {select, Store} from '@ngrx/store';
import {LoadUsersAction} from '../users/users-store/users.actions';
import {ChatterState} from '../chatter-store/chatter-store.state';
import {selectUsers} from '../users/users-store/users.selectors';

@Component({
  selector: 'chatter-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  private alive = true;
  contacts$: Observable<IContact[]> = this.store.pipe(
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
    private store: Store<ChatterState>
  ) {}

  ngOnInit(): void {
    this.auth.user$.pipe(
      takeWhile(() => this.alive),
      tap(user => user && this.store.dispatch(new LoadUsersAction()))
    ).subscribe();
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
