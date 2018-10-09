import {Component, Input} from '@angular/core';
import { IContact } from '../models/contact';
import {routerLinks} from '../../routes/router-links';

@Component({
  selector: 'chatter-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @Input() contact: IContact;
  links = routerLinks;
}
