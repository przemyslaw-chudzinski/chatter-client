import { Component, EventEmitter, Output } from '@angular/core';
import {RouterLinksService} from '../../routes/router-links.service';

@Component({
  selector: 'chatter-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  @Output() menuButtonClicked: EventEmitter<null> = new EventEmitter<null>();
  constructor(public routerLinksService: RouterLinksService) {}
}
