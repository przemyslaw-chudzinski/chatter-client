import { Injectable } from '@angular/core';
import {FormLayerServiceAbstract} from '../../form-layer-service.abstract';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PasswordValidator} from '../../validators/password/password.validator';

@Injectable()
export class ResetPasswordFormService extends FormLayerServiceAbstract{
  constructor(protected fb: FormBuilder) {
    super();
  }

  init(): FormGroup {
    return this.fb.group({
      password: [null, [
        Validators.required,
        Validators.minLength(6),
        PasswordValidator.validatePassword({lowercase: true, special: true, number: true, uppercase: true})
      ]],
      cPassword: [null, [Validators.required]]
    });
  }
}
