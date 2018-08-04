import { Injectable } from '@angular/core';
import {FormLayerServiceContract} from '../form-layer-service.contract';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Injectable()
export class ResetPasswordFormService implements FormLayerServiceContract{

  constructor(protected fb: FormBuilder) { }

  init(): FormGroup {
    return this.fb.group({
      password: [null, [Validators.required]],
      cPassword: [null, [Validators.required]]
    });
  }
}
