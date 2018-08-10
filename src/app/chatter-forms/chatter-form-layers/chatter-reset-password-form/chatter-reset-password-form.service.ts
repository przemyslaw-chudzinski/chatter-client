import { Injectable } from '@angular/core';
import {ChatterFormLayerServiceContract} from '../chatter-form-layer-service.contract';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ChatterValidators} from '../../chatter-validators';

@Injectable()
export class ChatterResetPasswordFormService implements ChatterFormLayerServiceContract{
  constructor(protected fb: FormBuilder) { }

  init(): FormGroup {
    return this.fb.group({
      password: [null, [Validators.required, Validators.minLength(6), ChatterValidators.testValidator]],
      cPassword: [null, [Validators.required]]
    });
  }
}
