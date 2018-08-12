import {AbstractControl, ValidatorFn} from '@angular/forms';
import {IPasswordValidatorOptions} from './models/password-validator-options.model';

export class PasswordValidator {
  private static _defaultOptions: IPasswordValidatorOptions = {
    lowercase: false,
    number: false,
    special: false,
    uppercase: false
  };

  private static _errors: {[k: string]: boolean} = {};
  private static _valid = true;

  static validatePassword(options?: IPasswordValidatorOptions): ValidatorFn {

    const _options = {...PasswordValidator._defaultOptions, ...options};

    return (control: AbstractControl) => {
      PasswordValidator._errors = {};
      PasswordValidator._valid = true;

      const hasUppercase = control.value && control.value.match(/[A-Z]/);
      const hasLowercase = control.value && control.value.match(/[a-z]/);
      const hasNumber = control.value && control.value.match(/[\d]/);
      const hasSpecial = control.value && control.value.match(/[\W]/);

      if (_options.lowercase && !hasLowercase) {
        PasswordValidator._errors['lowercase'] = true;
        PasswordValidator._valid = false;
      }

      if (_options.uppercase && !hasUppercase) {
        PasswordValidator._errors['uppercase'] = true;
        PasswordValidator._valid = false;
      }

      if (_options.number && !hasNumber) {
        PasswordValidator._errors['number'] = true;
        PasswordValidator._valid = false;
      }

      if (_options.special && !hasSpecial) {
        PasswordValidator._errors['special'] = true;
        PasswordValidator._valid = false;
      }

      return PasswordValidator._valid ? null : {
        rules: PasswordValidator._errors
      };
    };
  }
}
