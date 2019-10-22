import { Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidationErrors, Validator, ValidatorFn, FormGroup } from '@angular/forms';

@Directive({
  selector: '[appSelfParent]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ParentSelfValidatorDirective, multi: true }]
})

export class ParentSelfValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors {
    return parentSelfValidator(control)
  }
}

export const parentSelfValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const catId = control.get('catId');
  const catGender = control.get('radiogender')
  if (catGender) {
    if (!catGender.value) {
      const sireId = control.get('sireId');
      return catId && sireId && (catId.value == sireId.value) ?
        { 'parentSelf': true } : null;
    }

    const damId = control.get('damId');

    return catId && damId && (catId.value == damId.value) ?
      { 'parentSelf': true } : null;
  }
  return null;
};
