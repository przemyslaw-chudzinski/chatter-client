import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormLayersBase } from '../form-layers-base';

@Injectable()
export class LoginFormService extends FormLayersBase {
  constructor(protected fb: FormBuilder) {
    super(fb);
  }

  init(): void {
    this.formGroup = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });
  }
}
