import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

export interface Card {
  title: string;
  href?: string;
  icon?: string;
  link?: string[];
  linkTitle?: string;
}

@Component({
  selector: 'app-card',
  imports: [MatButtonModule, MatCardModule, MatIconModule, RouterModule],
  templateUrl: './card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  readonly card = input.required<Card>();
}
