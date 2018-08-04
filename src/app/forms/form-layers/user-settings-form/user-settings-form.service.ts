import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormLayerServiceContract} from '../form-layer-service.contract';

@Injectable()
export class UserSettingsFormService implements FormLayerServiceContract{

  constructor(protected fb: FormBuilder) { }

  init(): FormGroup {
    return this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]]
    });
  }
}
