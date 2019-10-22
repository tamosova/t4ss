import { Directive } from '@angular/core';
import {formatDate} from '@angular/common';
import { NG_VALIDATORS, AbstractControl, ValidationErrors, Validator, ValidatorFn, FormGroup } from '@angular/forms';

@Directive({
  selector: '[appBirthdayFuture]',
  providers: [{ provide: NG_VALIDATORS, useExisting: BirthdayFutureValidatorDirective, multi: true }]
})


export class BirthdayFutureValidatorDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors {
    return birthdayFutureValidator(control)
  }
}


export const birthdayFutureValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const birthday = control.get('birthday');
  const today = formatDate(new Date(), 'yyyy-MM-dd', 'en');

  return birthday && (birthday.value > today)  ?
    { 'birthdayFuture': true } : null;
}
