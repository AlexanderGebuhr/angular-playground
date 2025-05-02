import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ExampleComponent } from '../../shared/example/example.component';
import { Control } from '../shared/control';
import { ErrorMessagePipe } from '../shared/error-message-pipe';
import { ValidatorExtensions } from '../shared/validators';
import html from './registration.component.html.txt';
import scss from './registration.component.scss.txt';
import ts from './registration.component.ts.txt';

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
    super(
      {
        user: new FormGroup<RegistrationUserControls>({
          firstName: new FormControl<string>(registration?.user.firstName || '', {
            validators: [Validators.required],
            nonNullable: true,
          }),
          lastName: new FormControl<string>(registration?.user.lastName || '', {
            validators: [Validators.required],
            nonNullable: true,
          }),
          age: new FormControl<number>(registration?.user.age || 0, {
            validators: [Validators.required, Validators.min(18)],
            nonNullable: true,
          }),
        }),
        username: new FormControl<string>(registration?.username || '', {
          validators: [Validators.required, Validators.email],
          asyncValidators: [ValidatorExtensions.usernameUnique],
          nonNullable: true,
        }),
        password: new FormControl<string>(registration?.password || '', {
          validators: [Validators.required, Validators.minLength(10)],
          nonNullable: true,
        }),
        passwordConfirm: new FormControl<string>(registration?.passwordConfirm || '', {
          validators: [Validators.required, Validators.minLength(10)],
          nonNullable: true,
        }),
      },
      {
        validators: [
          ValidatorExtensions.equal<Registration>(
            { key: 'password', name: 'password' },
            { key: 'passwordConfirm', name: 'confirm password' },
          ),
        ],
      },
    );
  }

  validate(): void {
    this.markAllAsTouched();
    this.updateValueAndValidity();
  }
}

@Component({
  standalone: true,
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
  imports: [ErrorMessagePipe, ExampleComponent, MatButtonModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule],
  providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill', floatLabel: 'always' } }],
})
export class RegistrationComponent {
  readonly code = { ts, html, scss };
  readonly form = new RegistrationForm();

  submit(): void {
    // eslint-disable-next-line no-console
    console.log('submit', this.form.value);
  }
}
