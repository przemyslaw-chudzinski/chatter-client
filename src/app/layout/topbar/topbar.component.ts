import { Component, EventEmitter, Output } from '@angular/core';
import {routerLinks} from '../../routes/router-links';

@Component({
  selector: 'chatter-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  links = routerLinks;
  @Output() menuButtonClicked: EventEmitter<null> = new EventEmitter<null>();
  constructor() {}
}
