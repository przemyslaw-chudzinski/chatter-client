import {AbstractControl, AsyncValidator, ValidationErrors} from '@angular/forms';
import {Observable} from 'rxjs';
import {ValidatorsService} from '../validators.service';

export class CheckEmailAsyncValidator implements AsyncValidator {
  constructor(
    private validatorsService: ValidatorsService
  ) {
  }

  validate(c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.validatorsService.checkEmail(c.value);
  }
}

