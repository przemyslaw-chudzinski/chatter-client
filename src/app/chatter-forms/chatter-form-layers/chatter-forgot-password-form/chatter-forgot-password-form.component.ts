import { Component, OnInit } from '@angular/core';
import { ChatterForgotPasswordFormService } from './chatter-forgot-password-form.service';
import { ChatterFormLayersBase } from '../chatter-form-layers-base';

@Component({
  selector: 'chatter-forgot-password-form',
  templateUrl: './chatter-forgot-password-form.component.html',
  styleUrls: ['./chatter-forgot-password-form.component.scss'],
  exportAs: 'chatter-forgot-password-form'
})
export class ChatterForgotPasswordFormComponent extends ChatterFormLayersBase
  implements OnInit {
  constructor(public forgotPasswordFormService: ChatterForgotPasswordFormService) {
    super();
  }

  ngOnInit() {
    this.formGroup = this.forgotPasswordFormService.init();
  }
}
