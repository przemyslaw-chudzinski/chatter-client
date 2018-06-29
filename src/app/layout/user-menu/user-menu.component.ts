import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'chatter-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
  items: any[] = [
    {
      label: 'Account Settings',
      path: '',
      icon: ''
    }
  ];

  constructor() {}

  ngOnInit() {}
}
