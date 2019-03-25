import {Component, Input} from '@angular/core';
import {IUser} from '../../../auth/models/user.model';
import {Router} from '@angular/router';
import {routerLinks} from '../../../routes/router-links';
import {AuthService} from '../../../auth/auth.service';

@Component({
  selector: 'chatter-topbar-user-info',
  templateUrl: './topbar-user-info.component.html',
  styleUrls: ['./topbar-user-info.component.scss']
})
export class TopbarUserInfoComponent {
  @Input() user: IUser;

  constructor(
    private router: Router,
    private auth: AuthService
  ) {}

  redirectToSettings(destroyFn: () => void, event: MouseEvent): void {
    event.stopPropagation();
    event.preventDefault();
    this.router.navigate([routerLinks.accountPages.userAccount]);
    destroyFn();
  }

  logout(destroyFn: () => void, event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.auth.logOut();
    destroyFn();
  }
}
