import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ExampleComponent } from '../../shared/example/example.component';
import { Control } from '../shared/control';
import { ErrorMessagePipe } from '../shared/error-message-pipe';
import html from './login.component.html.txt';
import scss from './login.component.scss.txt';
import ts from './login.component.ts.txt';

export interface Login {
  username: string;
  password: string;
  rememberMe: boolean;
}

export type LoginControls = { [Key in keyof Login]: Control<Login[Key]> };

export class LoginForm extends FormGroup<LoginControls> {
  constructor(login?: Login) {
    super({
      username: new FormControl<string>(login?.username ?? '', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      password: new FormControl<string>(login?.password ?? '', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      rememberMe: new FormControl<boolean>(login?.rememberMe ?? false, { nonNullable: true }),
    });
  }

  validate(): void {
    this.markAllAsTouched();
    this.updateValueAndValidity();
  }
}

@Component({
  selector: 'app-login',
  imports: [
    ErrorMessagePipe,
    ExampleComponent,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill', floatLabel: 'always' } }],
})
export class LoginComponent {
  readonly code = { ts, html, scss };
  readonly form = new LoginForm();

  submit(): void {
    // eslint-disable-next-line no-console
    console.log('submit', this.form.value);
  }
}
