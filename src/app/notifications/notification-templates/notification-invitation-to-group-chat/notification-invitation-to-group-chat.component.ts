import {Component, Input} from '@angular/core';
import {INotification} from '../../models/notification.model';
import {ChannelsApiService} from '../../../channels/channels-api.service';
import {tap, take} from 'rxjs/operators';

@Component({
  selector: 'chatter-notification-invitation-to-group-chat',
  templateUrl: './notification-invitation-to-group-chat.component.html',
  styleUrls: ['./notification-invitation-to-group-chat.component.scss']
})
export class NotificationInvitationToGroupChatComponent {
  @Input() notification: INotification;
  constructor(private _channelsService: ChannelsApiService) { }

  handleAcceptation(): void {
    this._channelsService.acceptInvitation(this.notification._id)
      .pipe(
        take(1),
        tap(response => console.log(response))
      ).subscribe();
  }

}
