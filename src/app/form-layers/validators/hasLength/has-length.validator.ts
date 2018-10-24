import {AbstractControl, ValidatorFn} from '@angular/forms';

export const hasLength = (minLength: number, maxLength: number): ValidatorFn => {
  return (control: AbstractControl) => {
    let valid = true;
    const errors = {};
    const controlValue = control.value || [];

    if (valid && controlValue.length && minLength) {
      controlValue.length < minLength ? (valid = false) : null;
      errors['minLength'] = true;
    }

    if (valid && controlValue.length && maxLength) {
      controlValue.length > maxLength ? (valid = false) : null;
      errors['maxLength'] = true;
    }

    return valid ? null : {
      valid,
      errors
    };
  };
};
