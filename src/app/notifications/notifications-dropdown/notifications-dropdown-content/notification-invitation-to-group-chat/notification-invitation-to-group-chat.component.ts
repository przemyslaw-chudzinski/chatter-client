import {Component, Input, OnInit} from '@angular/core';
import {INotification} from '../../../models/notification.model';

@Component({
  selector: 'chatter-notification-invitation-to-group-chat',
  templateUrl: './notification-invitation-to-group-chat.component.html',
  styleUrls: ['./notification-invitation-to-group-chat.component.scss']
})
export class NotificationInvitationToGroupChatComponent implements OnInit {
  @Input() notification: INotification;

  constructor() { }

  ngOnInit() {
  }

}
