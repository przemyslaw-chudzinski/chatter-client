import { Component, OnInit, Input } from '@angular/core';
import { IResponseData } from '../../models/response-data';
import { IUser } from '../../auth/models/user.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'chatter-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  @Input() data: IResponseData<IUser>;

  constructor() {}

  ngOnInit() {}
}
