import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Card, CardComponent } from '../card/card';

@Component({
  selector: 'app-cards',
  imports: [CardComponent],
  templateUrl: './cards.html',
  styleUrl: './cards.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsComponent {
  readonly title = input.required<string>();
  readonly description = input<string>();
  readonly cards = input.required<Card[]>();
  readonly small = input<boolean>(false);
}
