import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { LoginFormComponent } from '../../../forms/form-layers/login-form/login-form.component';
import { ForgotPasswordFormComponent } from '../../../forms/form-layers/forgot-password-form/forgot-password-form.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'chatter-login-index',
  templateUrl: './login-index.component.html',
  styleUrls: ['./login-index.component.scss']
})
export class LoginIndexComponent implements OnInit, AfterViewInit {
  showLoginForm = true;

  @ViewChild('chatterLoginForm') chatterLoginForm: LoginFormComponent;
  @ViewChild('chatterForgotPasswordForm')
  chatterForgotPasswordForm: ForgotPasswordFormComponent;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    console.log(this.chatterLoginForm.loginFormService.formGroup.value);
  }

  toggleForms(): void {
    this.showLoginForm = !this.showLoginForm;
  }

  signIn(event: Event): void {
    console.log(this.chatterLoginForm.loginFormService.formGroup.value);
  }
}
