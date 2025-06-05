import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Card } from '../card/card';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-cards',
  imports: [CardComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsComponent {
  readonly title = input.required<string>();
  readonly description = input<string>();
  readonly cards = input.required<Card[]>();
  readonly small = input<boolean>(false);
}
