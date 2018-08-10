import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {ChatterFormLayerServiceContract} from '../chatter-form-layer-service.contract';

@Injectable()
export class ChatterLoginFormService implements ChatterFormLayerServiceContract{
  constructor(protected fb: FormBuilder) {}

  init(): FormGroup {
    return this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });
  }
}
