import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {FormLayerServiceContract} from '../form-layer-service.contract';

@Injectable()
export class ForgotPasswordFormService implements FormLayerServiceContract{
  constructor(protected fb: FormBuilder) {}

  init(): FormGroup {
    return this.fb.group({
      email: [null, [Validators.required, Validators.email]]
    });
  }
}
