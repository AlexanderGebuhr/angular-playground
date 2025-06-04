import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardsComponent } from '../shared/cards/cards.component';

@Component({
  selector: 'app-forms',
  imports: [CardsComponent],
  templateUrl: './forms.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormsComponent {}
