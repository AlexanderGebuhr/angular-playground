import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardsComponent } from '../shared/cards/cards.component';

@Component({
  selector: 'app-msw',
  imports: [CardsComponent],
  templateUrl: './msw.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MswComponent {}
