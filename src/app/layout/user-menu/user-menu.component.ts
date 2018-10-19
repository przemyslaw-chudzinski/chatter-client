import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import {routerLinks} from '../../routes/router-links';

@Component({
  selector: 'chatter-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent {
  links = routerLinks;
  constructor(
    public auth: AuthService
  ) {}

  logOut(): void {
    this.auth.logOut();
  }
}
