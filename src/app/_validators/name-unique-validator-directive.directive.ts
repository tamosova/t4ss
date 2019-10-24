import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidationErrors, Validator, ValidatorFn, FormGroup } from '@angular/forms';
import { Cat } from '../cat-general/cat';


@Directive({
  selector: '[appNameUnique]',
  providers: [{ provide: NG_VALIDATORS, useExisting: NameUniqueValidatorDirective, multi: true }]
})
export class NameUniqueValidatorDirective implements Validator {
  @Input('existingCats') listOfCats: Cat[] = [];

  validate(control: AbstractControl): ValidationErrors {
    return nameUniqueValidator(control)
  }
}

export const nameUniqueValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const catName = control.get('name');
  const catId = control.get('catId');
  let existingCat = catId ? catId.value : false;

  if (existingCat)
    return catName && this.listOfCats && this.listOfCats.filter(cat => cat.name == catName.value && cat.id == existingCat) ?
      { 'nameNotUnique': true } : null;
return  
}

