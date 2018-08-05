import { Component, Input } from '@angular/core';
import { IContact } from '../models/contact';
import {RouterLinksService} from '../../routes/router-links.service';

@Component({
  selector: 'chatter-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @Input() contact: IContact;

  constructor(public routerLinksService: RouterLinksService) {}
}
