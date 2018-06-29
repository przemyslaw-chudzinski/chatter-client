import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { tap, take } from 'rxjs/operators';
import { ResponseData } from '../models/response-data';
import { IUser } from '../auth/models/auth';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'chatter-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  asideOpened = true;

  users: ResponseData<IUser>;

  constructor(private userService: UsersService) {}

  ngOnInit() {
    // this.userService.users$
    //   .pipe(
    //     take(1),
    //     tap(response => (this.users = response))
    //   )
    //   .subscribe();
  }
}
