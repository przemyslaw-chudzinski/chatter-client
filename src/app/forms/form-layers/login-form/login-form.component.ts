import { Component, OnInit } from '@angular/core';
import { LoginFormService } from './login-form.service';
import { FormGroup } from '../../../../../node_modules/@angular/forms';
import { FormLayersBase } from '../form-layers-base';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'chatter-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  exportAs: 'chatter-login-form'
})
export class LoginFormComponent extends FormLayersBase implements OnInit {
  formGroup: FormGroup;

  constructor(public loginFormService: LoginFormService) {
    super();
  }

  ngOnInit() {
    this.formGroup = this.loginFormService.init();
  }
}
