import { Component } from "@angular/core";
import { LoginForm } from "./login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss']
})
export class LoginComponent {
  readonly loginForm = new LoginForm();
}
