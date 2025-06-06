import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardsComponent } from '../shared/cards/cards';

@Component({
  selector: 'app-msw',
  imports: [CardsComponent],
  templateUrl: './msw.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MswComponent {}
