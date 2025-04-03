import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ErrorMessagePipe } from '../shared/error-message-pipe';
import { LoginForm } from './login';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [ReactiveFormsModule, MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule, ErrorMessagePipe],
  providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill', floatLabel: 'always' } }],
})
export class LoginComponent {
  readonly form = new LoginForm();

  submit(): void {
    // eslint-disable-next-line no-console
    console.log('submit', this.form.value);
  }
}
