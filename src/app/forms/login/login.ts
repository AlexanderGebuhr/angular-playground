import { AbstractControl, FormControl, FormGroup, Validators } from "@angular/forms";

export interface Login {
  username: string;
  password: string;
  rememberMe: boolean;
}

export type LoginControls = { [Key in keyof Login]: AbstractControl<Login[Key]> };

export class LoginForm extends FormGroup<LoginControls> {
  constructor(login?: Login) {
    super({
      username: new FormControl<string>(login?.username || '', {
        validators: [ Validators.required ],
        nonNullable: true
      }),
      password: new FormControl<string>(login?.password || '', {
        validators: [ Validators.required ],
        nonNullable: true
      }),
      rememberMe: new FormControl<boolean>(login?.rememberMe || false, { nonNullable: true })
    })
  }

  get currentValue(): Partial<Login> {
    return this.value;
  }

  get currentRawValue(): Login {
    return this.getRawValue();
  }
}