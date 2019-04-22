import {Component, Input} from '@angular/core';
import {IChannelMemberFull} from '../../models/channel-member-full.model';

@Component({
  selector: 'chatter-channel-members-list-menu',
  templateUrl: './channel-members-list-menu.component.html',
  styleUrls: ['./channel-members-list-menu.component.scss']
})
export class ChannelMembersListMenuComponent {

  @Input() member: IChannelMemberFull = null;
  @Input() destroyFn = () => {};

  private close(): void {
    this.destroyFn && this.destroyFn();
  }

}
