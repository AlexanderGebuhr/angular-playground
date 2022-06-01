import { AbstractControl, FormControl, FormGroup, Validators } from "@angular/forms";
import { ValidatorExtensions } from "../validators";

export interface RegistrationUser {
  firstName?: string;
  lastName?: string;
  email?: string;
  age?: number;
}

export interface Registration {
  user: RegistrationUser;
  password: string;
  passwordConfirm: string;
}

export type RegistrationUserControls = { [Key in keyof RegistrationUser]: AbstractControl<RegistrationUser[Key]> };

export type RegistrationControls = { [Key in keyof Registration]: AbstractControl<Registration[Key]> };

export class RegistrationForm extends FormGroup<RegistrationControls> {
  constructor(registration?: Registration) {
    super({
      user: new FormGroup<RegistrationUserControls>({
        firstName: new FormControl<string>(registration?.user.firstName || '', {
          validators: [ Validators.required ],
          nonNullable: true
        }),
        lastName: new FormControl<string>(registration?.user.lastName || '', {
          validators: [ Validators.required ],
          nonNullable: true
        }),
        email: new FormControl<string>(registration?.user.email || '', {
          validators: [ Validators.required, Validators.email ],
          asyncValidators: [],
          nonNullable: true
        }),
        age: new FormControl<number>(registration?.user.age || 0, {
          validators: [ Validators.required, Validators.min(18) ],
          nonNullable: true,
        })
      }),
      password: new FormControl<string>(registration?.password || '', {
        validators: [ Validators.required, ValidatorExtensions.password(10) ],
        nonNullable: true
      }),
      passwordConfirm: new FormControl<string>(registration?.passwordConfirm || '', {
        validators: [ Validators.required ],
        nonNullable: true
      })
    }, {
      validators: [ ValidatorExtensions.equal<Registration>("password", "passwordConfirm") ]
    })
  }

  get currentValue(): Partial<Registration> {
    return this.value;
  }

  get currentRawValue(): Registration {
    return this.getRawValue();
  }
}
