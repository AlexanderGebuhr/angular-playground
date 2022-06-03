import { Component } from "@angular/core";
import { RegistrationForm } from "./registration";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: [ './registration.component.scss']
})
export class RegistrationComponent {
  readonly form = new RegistrationForm();

  submit(): void {
    console.log('submit', this.form.value);
  }
}
