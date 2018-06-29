import { Injectable } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';

@Injectable()
export class LoginFormService {
  private _formGroup: FormGroup;

  constructor(private fb: FormBuilder) {}

  init(): void {
    this._formGroup = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });
  }

  get formGroup(): FormGroup {
    return this._formGroup;
  }

  get email(): AbstractControl {
    return this._formGroup.controls.email;
  }

  get password(): AbstractControl {
    return this._formGroup.controls.password;
  }
}
