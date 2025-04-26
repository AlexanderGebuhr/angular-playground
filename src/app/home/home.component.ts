import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CardsComponent } from '../shared/cards/cards.component';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [CardsComponent, RouterModule, MatButtonModule, MatCardModule, MatIconModule],
})
export class HomeComponent {
  readonly title = 'angular-playground';
}
