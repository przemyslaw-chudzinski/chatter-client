import { Component, Input } from '@angular/core';
import { IUser } from '../../../auth/models/user.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'chatter-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @Input() contact: IUser;

  constructor() {}
}
