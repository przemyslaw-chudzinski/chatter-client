import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormLayerServiceContract} from '../form-layer-service.contract';
import {IUser} from '../../../auth/models/user.model';

@Injectable()
export class UserSettingsFormService implements FormLayerServiceContract<IUser> {

  userProperty(user: IUser): IUser {
    return user ? user : null;
  }

  constructor(protected fb: FormBuilder) { }

  /**
   * @desc Initiazlize form layer
   * @param user
   */
  init(user?: IUser): FormGroup {
    return this.fb.group({
      email: [this.userProperty(user).email, [Validators.required, Validators.email]],
      firstName: [this.userProperty(user).firstName, [Validators.required]],
      lastName: [this.userProperty(user).lastName, [Validators.required]]
    });
  }
}
