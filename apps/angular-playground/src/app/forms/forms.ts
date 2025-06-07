import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardsComponent } from '../shared/cards/cards';

@Component({
  selector: 'app-forms',
  imports: [CardsComponent],
  templateUrl: './forms.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormsComponent {}
