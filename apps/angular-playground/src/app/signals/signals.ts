import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardsComponent } from '../shared/cards/cards';

@Component({
  selector: 'app-signals',
  imports: [CardsComponent],
  templateUrl: './signals.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalsComponent {}
