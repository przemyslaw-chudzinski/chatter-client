import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'chatter-notifications-dropdown-content',
  templateUrl: './notifications-dropdown-content.component.html',
  styleUrls: ['./notifications-dropdown-content.component.scss']
})
export class NotificationsDropdownContentComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    console.log('NotificationsDropdownContentComponent')
  }

}
