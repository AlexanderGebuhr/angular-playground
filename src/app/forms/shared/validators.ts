import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

export class ValidatorExtensions {
  private static usernamesTaken = ['user@mail.com', 'user01@mail.com', 'user02@mail.com', 'user03@mail.com'];

  static equal<TValue extends Record<string, any>>(
    p1: { key: keyof TValue; name: string },
    p2: { key: keyof TValue; name: string },
  ): ValidatorFn {
    return (control: AbstractControl<TValue>) => {
      const value1 = control.value?.[p1.key];
      const value2 = control.value?.[p2.key];
      return value1 !== value2 ? { equal: { p1, p2 } } : null;
    };
  }

  static usernameUnique(control: AbstractControl<string>): Observable<ValidationErrors | null> {
    const error = ValidatorExtensions.usernamesTaken.includes(control.value) ? { usernameUnique: true } : null;
    return of(error).pipe(delay(300));
  }
}
