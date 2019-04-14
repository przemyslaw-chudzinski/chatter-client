import {Component, Input, OnInit} from '@angular/core';
import {IChannel} from '../models/channel.model';
import {ChannelsApiService} from '../channels-api.service';
import {take, tap} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {ChatterState} from '../../chatter-store/chatter-store.state';
import {LoadChannelsAction, RemoveChannelAction} from '../channels-store/channels.actions';
import {AuthService} from '../../auth/auth.service';
import {IUser} from '../../auth/models/user.model';
import {routerLinks} from '../../routes/router-links';
import {Router} from '@angular/router';

@Component({
  selector: 'chatter-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {
  @Input() channel: IChannel = null;
  accepted: boolean;
  accepting: boolean;
  removing: boolean;

  constructor(
    private channelsApiService: ChannelsApiService,
    private store: Store<ChatterState>,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.accepted = this.checkAcceptation();
  }

  showEditForm(channel: IChannel, event: MouseEvent): void {
    event.stopPropagation();
  }

  get authUser(): IUser {
    return this.auth.user$.value;
  }

  removeChannel(channel: IChannel, event: MouseEvent): void {
    event.stopPropagation();
    event.preventDefault();
    const confirmed = confirm('Do you want to remove this conversation group?');
    confirmed && (this.removing = true);
    confirmed && this.store.dispatch(new RemoveChannelAction(channel));
  }

  checkAcceptation(): boolean {
    return this.channel.members.some(member => member.memberId === this.authUser._id && member.confirmed);
  }

  acceptInvitation(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.accepting = true;
    this.channelsApiService.acceptInvitation(this.channel._id)
      .pipe(
        take(1),
        tap(() => (this.accepted = true)),
        tap(() => (this.accepting = false)),
        tap(() => this.store.dispatch(new LoadChannelsAction()))
      ).subscribe();
  }

  goToChannelDetails(channel: IChannel, event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.router.navigate([routerLinks.channelsPage, channel._id, 'details'])
  }
}
