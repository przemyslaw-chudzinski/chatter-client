import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ChatterFormLayerServiceContract} from '../chatter-form-layer-service.contract';
import {IUser} from '../../../auth/models/user.model';

@Injectable()
export class ChatteruserSettingsFormService implements ChatterFormLayerServiceContract<IUser> {

  constructor(protected fb: FormBuilder) { }

  /**
   * @desc Initiazlize form layer
   */
  init(): FormGroup {
    return this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      _id: [null, [Validators.required]]
    });
  }
}
