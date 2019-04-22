import {Component, Input} from '@angular/core';
import {IChannelMemberFull} from '../models/channel-member-full.model';

@Component({
  selector: 'chatter-channel-members-list',
  templateUrl: './channel-members-list.component.html',
  styleUrls: ['./channel-members-list.component.scss']
})
export class ChannelMembersListComponent {
  @Input() members: IChannelMemberFull[] = null;
  defaultThumbnailUrl = 'http://placehold.it/40x40';
}
