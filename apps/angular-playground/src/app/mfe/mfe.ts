import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardsComponent } from '../shared/cards/cards';

@Component({
  selector: 'app-mfe',
  imports: [CardsComponent],
  templateUrl: './mfe.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MfeComponent {}
