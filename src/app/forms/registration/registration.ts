import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorExtensions } from '../shared/validators';
import { Control } from '../shared/control';

export interface RegistrationUser {
  firstName: string;
  lastName: string;
  age: number;
}

export interface Registration {
  user: RegistrationUser;
  username: string;
  password: string;
  passwordConfirm: string;
}

export type RegistrationUserControls = { [Key in keyof RegistrationUser]: Control<RegistrationUser[Key]> };

export type RegistrationControls = { [Key in keyof Registration]: Control<Registration[Key]> };

export class RegistrationForm extends FormGroup<RegistrationControls> {
  constructor(registration?: Registration) {
    super({
      user: new FormGroup<RegistrationUserControls>({
        firstName: new FormControl<string>(registration?.user.firstName || '', {
          validators: [ Validators.required ],
          nonNullable: true,
        }),
        lastName: new FormControl<string>(registration?.user.lastName || '', {
          validators: [ Validators.required ],
          nonNullable: true,
        }),
        age: new FormControl<number>(registration?.user.age || 0, {
          validators: [ Validators.required, Validators.min(18) ],
          nonNullable: true,
        }),
      }),
      username: new FormControl<string>(registration?.username || '', {
        validators: [ Validators.required, Validators.email ],
        asyncValidators: [ ValidatorExtensions.usernameUnique ],
        nonNullable: true,
      }),
      password: new FormControl<string>(registration?.password || '', {
        validators: [ Validators.required, Validators.minLength(10) ],
        nonNullable: true,
      }),
      passwordConfirm: new FormControl<string>(registration?.passwordConfirm || '', {
        validators: [ Validators.required, Validators.minLength(10) ],
        nonNullable: true,
      }),
    }, {
      validators: [
        ValidatorExtensions.equal<Registration>(
          { key: 'password', name: 'password' },
          { key: 'passwordConfirm', name: 'confirm password' },
        ),
      ],
    });
  }

  validate(): void {
    this.markAllAsTouched();
    this.updateValueAndValidity();
  }
}
