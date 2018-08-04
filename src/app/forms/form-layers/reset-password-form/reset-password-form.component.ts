import { Component, OnInit } from '@angular/core';
import {ResetPasswordFormService} from './reset-password-form.service';
import {FormLayersBase} from '../form-layers-base';

@Component({
  selector: 'chatter-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.scss']
})
export class ResetPasswordFormComponent extends FormLayersBase implements OnInit {

  constructor(private resetPasswordService: ResetPasswordFormService) {
    super();
  }

  ngOnInit() {
    this.formGroup = this.resetPasswordService.init();
  }

}
