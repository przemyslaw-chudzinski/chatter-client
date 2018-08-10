import { Component, OnInit } from '@angular/core';
import {ChatterResetPasswordFormService} from './chatter-reset-password-form.service';
import {ChatterFormLayersBase} from '../chatter-form-layers-base';

@Component({
  selector: 'chatter-reset-password-form',
  templateUrl: './chatter-reset-password-form.component.html',
  styleUrls: ['./chatter-reset-password-form.component.scss'],
  exportAs: 'reset-password-form'
})
export class ChatterResetPasswordFormComponent extends ChatterFormLayersBase implements OnInit {
  constructor(private resetPasswordService: ChatterResetPasswordFormService) {
    super();
  }

  ngOnInit() {
    this.formGroup = this.resetPasswordService.init();
  }

  resetPassword(): void {
    console.log('sending request to db');
  }

}
