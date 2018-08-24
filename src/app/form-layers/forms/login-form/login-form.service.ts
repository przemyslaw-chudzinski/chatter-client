import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {FormLayerServiceAbstract} from '../../form-layer-service.abstract';

@Injectable()
export class LoginFormService extends FormLayerServiceAbstract {
  constructor(protected fb: FormBuilder) {
    super();
  }

  init(): FormGroup {
    return this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });
  }
}
