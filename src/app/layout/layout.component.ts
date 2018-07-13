import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { IResponseData } from '../models/response-data';
import { IUser } from '../auth/models/user.model';
import { UsersService } from '../users/users.service';
import { take, tap } from '../../../node_modules/rxjs/operators';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'chatter-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  users: IResponseData<IUser>;
  constructor(public auth: AuthService, private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.users$
      .pipe(
        take(1),
        tap(users => (this.users = users))
      )
      .subscribe();
  }
}
