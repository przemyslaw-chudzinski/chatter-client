import { Component, Input } from '@angular/core';
import { IContact } from '../models/contact';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'chatter-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @Input() contact: IContact;

  constructor() {}
}
