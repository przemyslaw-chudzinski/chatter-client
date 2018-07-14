import { Component, OnInit } from '@angular/core';
import { ForgotPasswordFormService } from './forgot-password-form.service';
import { FormGroup } from '@angular/forms';
import { FormLayersBase } from '../form-layers-base';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'chatter-forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
  styleUrls: ['./forgot-password-form.component.scss'],
  exportAs: 'chatter-forgot-password-form'
})
export class ForgotPasswordFormComponent extends FormLayersBase
  implements OnInit {
  formGroup: FormGroup;
  constructor(public forgotPasswordFormService: ForgotPasswordFormService) {
    super();
  }

  ngOnInit() {
    this.formGroup = this.forgotPasswordFormService.init();
  }
}
