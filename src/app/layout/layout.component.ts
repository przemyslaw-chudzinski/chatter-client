import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';
import {IContact} from '../contact-list/models/contact';
import {select, Store} from '@ngrx/store';
import {LoadUserAction} from '../users/users-store/users.actions';
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
    map(usersState => usersState.users),
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
    this.store.dispatch(new LoadUserAction());
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
