import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'chatter-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent {
  constructor(private auth: AuthService) {}

  logOut(event: Event): void {
    this.auth.logOut();
  }
}
