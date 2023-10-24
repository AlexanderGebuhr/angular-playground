import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
  imports: [RouterModule, MatIconModule],
})
export class FormsComponent {}
