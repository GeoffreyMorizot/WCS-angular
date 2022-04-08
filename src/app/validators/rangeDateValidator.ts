import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function rangeDateValidator(
  minDate: number,
  maxDate = new Date().getFullYear()
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value >= minDate && control.value <= maxDate) {
      return null;
    } else {
      return {
        minMax: { value: control.value, expected: { minDate, maxDate } },
      };
    }
  };
}
