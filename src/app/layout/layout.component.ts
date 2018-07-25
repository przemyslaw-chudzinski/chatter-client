import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { IResponseData } from '../models/response-data';
import { IUser } from '../auth/models/user.model';
import { UsersService } from '../users/users.service';
import { tap, switchMap, takeWhile, map } from 'rxjs/operators';
import { of } from '../../../node_modules/rxjs';
import { IContact } from './contact-list/models/contact';

@Component({
  // tslint:disable-next-line:component-selector
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
          users.results.map(c => (c.newMessagesCount = 0));
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
