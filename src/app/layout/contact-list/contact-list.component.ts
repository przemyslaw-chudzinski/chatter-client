import { Component, OnInit, Input } from '@angular/core';
import { ResponseData } from '../../models/response-data';
import { IUser } from '../../auth/models/auth';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'chatter-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  @Input() data: ResponseData<IUser>;

  constructor() {}

  ngOnInit() {}
}
