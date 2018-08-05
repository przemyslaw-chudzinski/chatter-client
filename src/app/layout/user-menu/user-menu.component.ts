import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import {RouterLinksService} from '../../routes/router-links.service';

@Component({
  selector: 'chatter-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent {
  constructor(
    private auth: AuthService,
    public routerLinksService: RouterLinksService
  ) {}

  logOut(): void {
    this.auth.logOut();
  }
}
