import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardsComponent } from '../shared/cards/cards.component';

@Component({
  selector: 'app-signals',
  imports: [CardsComponent],
  templateUrl: './signals.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalsComponent {}
