import {Directive, HostListener, Input} from '@angular/core';
import {IChannel} from '../models/channel.model';
import {Router} from '@angular/router';
import {routerLinks} from '../../routes/router-links';
import {MatDialog} from '@angular/material';
import {NoAccessDialogComponent} from '../../auth/dialogs/no-access-dialog/no-access-dialog.component';
import {AuthService} from '../../auth/auth.service';

@Directive({
  selector: '[chatterGoToChannelPage]'
})
export class GoToChannelPageDirective {

  @Input('chatterGoToChannelPage') channel: IChannel;

  constructor(
    private router: Router,
    private matDialog: MatDialog,
    private auth: AuthService
  ) { }

  @HostListener('click', ['$event'])
  navigate(event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();
    if (!this.channel) return;
    if (!this.confirmed()) {
      this.matDialog.open(NoAccessDialogComponent, {
        data: {
          reason: 'You dont have access because you have not confirmed an invitation yet'
        }
      });
      return;
    }
    this.router.navigate(['/', routerLinks.channelsPage, this.channel._id]);
  }

  private confirmed(): boolean {
    const {members} = this.channel;
    return members && members.length && members.some(item => this.auth.user$.value._id === item.memberId && item.confirmed);
  }

  private navigateToHome(): void {
    this.router.navigate(['/', routerLinks.dashboardPage]);
  }

}
