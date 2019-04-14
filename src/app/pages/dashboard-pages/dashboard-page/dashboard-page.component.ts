import { Component } from '@angular/core';
import {AuthService} from '../../../auth/auth.service';

@Component({
  selector: 'chatter-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent {
  constructor(public auth: AuthService) {}
}
