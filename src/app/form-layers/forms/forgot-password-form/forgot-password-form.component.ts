import { Component, OnInit } from '@angular/core';
import { ForgotPasswordFormService } from './forgot-password-form.service';
import {FormLayersAbstract} from '../../form-layers.abstract';

@Component({
  selector: 'chatter-forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
  styleUrls: ['./forgot-password-form.component.scss'],
  exportAs: 'chatter-forgot-password-form'
})
export class ForgotPasswordFormComponent extends FormLayersAbstract
  implements OnInit {
  constructor(public forgotPasswordFormService: ForgotPasswordFormService) {
    super();
  }

  ngOnInit() {
    this.formGroup = this.forgotPasswordFormService.init();
  }
}
