import { FormGroup, AbstractControl } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';

export abstract class FormLayersAbstract {
  @Output() enterDown = new EventEmitter<null>();

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

  get isInvalid(): boolean {
    return this.formGroup.invalid;
  }

  reset(): void {
    this._formGroup.reset();
  }

  submitHandler(event: Event): void {
    this.enterDown.emit(null);
  }
}
