import {Component, Input, OnInit} from '@angular/core';
import {IChannel} from '../models/channel.model';
import {ChannelsApiService} from '../channels-api.service';
import {take, tap} from 'rxjs/operators';
import {NotificationsService} from '../../notifications/notifications.service';
import {Store} from '@ngrx/store';
import {ChatterState} from '../../chatter-store/chatter-store.state';
import {LoadChannelsAction} from '../channels-store/channels.actions';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'chatter-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {
  @Input() channel: IChannel = null;
  accepted: boolean;

  constructor(
    private _channelsApiService: ChannelsApiService,
    private _notificationsService: NotificationsService,
    private _store: Store<ChatterState>,
    private _auth: AuthService
  ) {}

  ngOnInit(): void {
    this.accepted = this.checkAcceptation();
  }

  showEditForm(channel: IChannel, event: MouseEvent): void {
    event.stopPropagation();
  }

  removeGroup(channel: IChannel, event: MouseEvent): void {
    event.stopPropagation();
    const confirmed = confirm('Do you want to remove this conversation group?');
    confirmed && this._channelsApiService.deleteChannel(channel._id)
      .pipe(
        take(1),
        tap(response => this._notificationsService.open(response.message)),
        tap(() => this._store.dispatch(new LoadChannelsAction()))
      ).subscribe();
  }

  checkAcceptation(): boolean {
    return this.channel.members.some(member => member.memberId === this._auth.user$.value._id && member.confirmed);
  }

  acceptInvitation(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this._channelsApiService.acceptInvitation(this.channel._id)
      .pipe(
        tap(() => (this.accepted = true)),
      ).subscribe();
  }
}
