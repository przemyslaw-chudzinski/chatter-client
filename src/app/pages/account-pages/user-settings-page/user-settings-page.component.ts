import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../auth/auth.service';

@Component({
  selector: 'chatter-user-settings-page',
  templateUrl: './user-settings-page.component.html',
  styleUrls: ['./user-settings-page.component.scss']
})
export class UserSettingsPageComponent implements OnInit {

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit() {
  }

}
