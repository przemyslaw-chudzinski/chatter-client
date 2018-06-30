import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';

export class FormLayersBase {
  private _formGroup: FormGroup;

  get formGroup(): FormGroup {
    return this._formGroup;
  }

  set formGroup(formGroup: FormGroup) {
    this._formGroup = formGroup;
  }

  get controls(): { [key: string]: AbstractControl } {
    return this._formGroup.controls;
  }

  get value(): any {
    return this._formGroup.value;
  }

  get isValid(): boolean {
    return this.formGroup.valid;
  }

  constructor(protected fb: FormBuilder) {}
}
