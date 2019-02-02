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
  processingRequest: boolean;
  constructor(private _channelsService: ChannelsApiService) { }

  handleAcceptation(): void {
    this.processingRequest = true;
    this._channelsService.acceptInvitation(this.notification._id)
      .pipe(
        take(1),
        tap(response => console.log(response)),
        tap(() => this.changeStateToAccepted())
      ).subscribe();
  }

  changeStateToAccepted(): void {
    this.processingRequest = false;
    const _notification = {...this.notification};
    if (_notification) (_notification.extra.confirmed = true);
    this.notification = _notification;
  }

}
