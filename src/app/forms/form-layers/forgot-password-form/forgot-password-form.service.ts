import { Injectable } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordFormService {
  private _formGroup: FormGroup;

  constructor(private fb: FormBuilder) {}

  init(): void {
    this._formGroup = this.fb.group({
      email: [null, [Validators.required, Validators.email]]
    });
  }

  get formGroup(): FormGroup {
    return this._formGroup;
  }

  get email(): AbstractControl {
    return this.formGroup.get('email');
  }
}
