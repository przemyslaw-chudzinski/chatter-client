import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormLayerServiceAbstract} from '../../form-layer-service.abstract';
import {IUser} from '../../../auth/models/user.model';
import {CheckEmailAsyncValidator} from '../../validators/email/check-email-async.validator';
import {ValidatorsService} from '../../validators/validators.service';

@Injectable()
export class UserSettingsFormService extends FormLayerServiceAbstract<IUser> {
  constructor(
    protected fb: FormBuilder,
    private validatorsService: ValidatorsService
  ) {
    super();
  }

  init(): FormGroup {
    return this.fb.group({
      email: [null, [Validators.required, Validators.email], [new CheckEmailAsyncValidator(this.validatorsService)]],
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      _id: [null, [Validators.required]]
    });
  }
}
