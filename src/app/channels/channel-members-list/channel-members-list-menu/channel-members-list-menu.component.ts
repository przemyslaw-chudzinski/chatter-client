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

  menuItems = [
    {
      id: 1,
      header: 'Block user',
      description: 'If you block user he wont be able to see or get into channel page',
      hidden: () => this.member['blocked'],
      loading: false,
      clickHandlerMsg: 'Please wait! Blocking user...',
      clickHandler: this.blockUser,
      markUserAsBlocked: this.markUserAsBlocked.bind(this),
      close: this.close.bind(this)
    },
    {
      id: 2,
      header: 'Unblock user',
      description: 'If you unblock user he will be able to see or get into channel page',
      hidden: () => !this.member['blocked'],
      loading: false,
      clickHandlerMsg: 'Please wait! Blocking user...',
      clickHandler: this.unblockUser,
      markUserAsUnblocked: this.markUserAsUnblocked.bind(this),
      close: this.close.bind(this)
    },
    {
      id: 3,
      header: 'Send invitation again',
      description: 'You can send a new invitation to this member',
      hidden: () => this.member.confirmed,
      loading: false,
      clickHandlerMsg: 'Please wait! Sending a new invitation...',
      clickHandler: this.sendInvitation,
      close: this.close.bind(this)
    }
  ];

  private blockUser(): void {
    const that: any = this;
    that.loading = true;
    setTimeout(() => {
      that.markUserAsBlocked();
      that.close();
    }, 2000);
  }

  private unblockUser(): void {
    const that: any = this;
    that.loading = true;
    that.markUserAsUnblocked();
    setTimeout(() => that.close(), 2000);
  }

  private sendInvitation(): void {
    const that: any = this;
    that.loading = true;
    setTimeout(() => that.close(), 2000);
  }

  private close(): void {
    this.destroyFn && this.destroyFn();
  }

  /**
   * Only for tests
   */
  private markUserAsBlocked(): void {
    this.member['blocked'] = true
  }

  private markUserAsUnblocked(): void {
    this.member['blocked'] = false;
  }

}
