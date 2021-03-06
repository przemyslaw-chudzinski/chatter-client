import {Component, Input} from '@angular/core';
import {INotification} from '../../models/notification.model';
import {ChannelsApiService} from '../../../channels/channels-api.service';
import {tap, take} from 'rxjs/operators';
import {ChatterState} from '../../../chatter-store/chatter-store.state';
import {Store} from '@ngrx/store';
import {LoadChannelsAction} from '../../../channels/channels-store/channels.actions';

@Component({
  selector: 'chatter-notification-invitation-to-group-chat',
  templateUrl: './notification-invitation-to-group-chat.component.html',
  styleUrls: ['./notification-invitation-to-group-chat.component.scss']
})
export class NotificationInvitationToGroupChatComponent {
  @Input() notification: INotification;
  processingRequest: boolean;
  constructor(private _channelsService: ChannelsApiService, private _store: Store<ChatterState>) { }

  handleAcceptation(): void {
    this.processingRequest = true;
    this._channelsService.acceptInvitation(this.notification._id)
      .pipe(
        take(1),
        tap(response => console.log(response)),
        tap(() => this.changeStateToAccepted()),
        tap(() => this._store.dispatch(new LoadChannelsAction()))
      ).subscribe();
  }

  changeStateToAccepted(): void {
    this.processingRequest = false;
    const _notification = {...this.notification};
    if (_notification) (_notification.extra.confirmed = true);
    this.notification = _notification;
  }

}
