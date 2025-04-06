import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [RouterModule, MatIconModule],
})
export class HomeComponent {
  readonly title = 'angular-playground';
}
