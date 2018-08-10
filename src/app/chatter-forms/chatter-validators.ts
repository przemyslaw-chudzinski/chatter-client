import {AbstractControl, ValidationErrors} from '@angular/forms';

export class ChatterValidators {
  /**
   * @desc test validator
   * @important ta funkcja jest funkcją walidującą
   */
  static testValidator<ValidatorFn>(control: AbstractControl): ValidationErrors {
    return {
      testError: true
    };
  }
}
