import {Directive, Input, OnDestroy} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {takeWhile, tap} from 'rxjs/operators';

@Directive({
  selector: '[fieldsMatch]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MatchFieldsDirective,
      multi: true
    }
  ]
})
export class MatchFieldsDirective implements Validator, OnDestroy {
  @Input() fieldsMatch: AbstractControl;
  alive = true;

  validate(control: AbstractControl): ValidationErrors | null {
    return control.value === this.fieldsMatch.value ?  null : {
      matchError: true
    };
  }

  registerOnValidatorChange(fn: () => void): void {
    this.fieldsMatch.valueChanges.pipe(
      takeWhile(() => this.alive),
      tap(fn)
    ).subscribe();
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
