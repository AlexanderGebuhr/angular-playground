import { AbstractControl, AsyncValidatorFn, ValidatorFn, Validators } from "@angular/forms";
import { of } from "rxjs";

export class ValidatorExtensions {
  static equal<TValue extends { [key: string ]: any }>(key1: keyof TValue, key2: keyof TValue): ValidatorFn {
    return (control: AbstractControl<TValue>) => {
      const value1 = control.value?.[key1];
      const value2 = control.value?.[key2];
      if (value1 !== value2) {
        return { equal: true }
      }
      return null;
    };
  }

  static password(minLength: number): ValidatorFn {
    const minLengthValidator = Validators.minLength(minLength);
    return (control: AbstractControl<string>) => {
      const minLengthErrors = minLengthValidator(control);
      if (minLengthErrors) {
        return minLengthErrors;
      }
      return null;
    };
  }

  static emailUnused(): AsyncValidatorFn {
    return (control: AbstractControl<string>) => {
      return of(null);
    };
  }
}
