import { Component, OnInit } from '@angular/core';
import { LoginFormService } from './login-form.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'chatter-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  exportAs: 'chatter-login-form'
})
export class LoginFormComponent implements OnInit {
  constructor(public loginFormService: LoginFormService) {}

  ngOnInit() {
    this.loginFormService.init();
  }
}
