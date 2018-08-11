import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export class ChatterValidators {
  /**
   * @desc test validator
   * @important ta funkcja jest funkcją walidującą
   */
  static testValidator(control: AbstractControl): ValidationErrors {
    return {
      testError: true
    };
  }

  static testValidator2(options: any): ValidatorFn {
    return (control: AbstractControl) => {
      return {
        error: true
      };
    };
  }
}
