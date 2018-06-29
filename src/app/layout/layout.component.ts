import { Component, OnInit } from '@angular/core';
import { ResponseData } from '../models/response-data';
import { IUser } from '../auth/models/user.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'chatter-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  asideOpened = true;

  users: ResponseData<IUser>;

  constructor() {}

  ngOnInit() {}
}
