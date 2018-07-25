import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { IResponseData } from '../models/response-data';
import { UsersService } from '../users/users.service';
import { tap, switchMap, takeWhile, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { IContact } from './contact-list/models/contact';

@Component({
  selector: 'chatter-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  contacts: IResponseData<IContact>;

  private alive = true;

  constructor(public auth: AuthService, private usersService: UsersService) {}

  ngOnInit(): void {
    this.auth.user$
      .pipe(
        takeWhile(() => this.alive),
        switchMap(user => (user ? this.usersService.users$() : of(null))),
        map(users => users as IResponseData<IContact>),
        map(users => {
          if (users && users.results && users.results.length) {
            users.results = users.results.map(c => {
              c.newMessagesCount = 0;
              return c;
            });
          }
          return users;
        }),
        tap(contacts => (this.contacts = contacts))
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
