import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { IResponseData } from '../models/response-data';
import { IUser } from '../auth/models/user.model';
import { UsersService } from '../users/users.service';
import { take, tap, switchMap, takeWhile } from 'rxjs/operators';
import { of } from '../../../node_modules/rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'chatter-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  users: IResponseData<IUser>;

  private alive = true;

  constructor(public auth: AuthService, private usersService: UsersService) {}

  ngOnInit(): void {
    console.log('layout init');
    this.auth.user$
      .pipe(
        takeWhile(() => this.alive),
        switchMap(user => (user ? this.usersService.users$() : of(null))),
        tap(users => (this.users = users))
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
