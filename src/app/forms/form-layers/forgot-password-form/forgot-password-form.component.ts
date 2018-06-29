import { Component, OnInit } from '@angular/core';
import { ForgotPasswordFormService } from './forgot-password-form.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'chatter-forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
  styleUrls: ['./forgot-password-form.component.scss'],
  exportAs: 'forgot-password-form'
})
export class ForgotPasswordFormComponent implements OnInit {
  constructor(public forgotPasswordFormService: ForgotPasswordFormService) {}

  ngOnInit() {
    this.forgotPasswordFormService.init();
  }
}
