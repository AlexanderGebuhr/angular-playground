import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Card } from '../card/card';
import { CardComponent } from '../card/card.component';

@Component({
  standalone: true,
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CardComponent],
})
export class CardsComponent {
  readonly title = input.required<string>();
  readonly description = input<string>();
  readonly cards = input.required<Card[]>();
  readonly small = input<boolean>(false);
}
