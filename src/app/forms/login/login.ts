import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Control } from "../shared/control";

export interface Login {
  username: string;
  password: string;
  rememberMe: boolean;
}

export type LoginControls = { [Key in keyof Login]: Control<Login[Key]> };

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

  validate(): void {
    this.markAllAsTouched();
    this.updateValueAndValidity();
  }
}
