import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ErrorMessagePipe } from '../shared/error-message-pipe';
import { RegistrationForm } from './registration';

@Component({
  standalone: true,
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
  imports: [ReactiveFormsModule, MatButtonModule, MatInputModule, MatFormFieldModule, ErrorMessagePipe],
  providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill', floatLabel: 'always' } }],
})
export class RegistrationComponent {
  readonly form = new RegistrationForm();

  submit(): void {
    // eslint-disable-next-line no-console
    console.log('submit', this.form.value);
  }
}
