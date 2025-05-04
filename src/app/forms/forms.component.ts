import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardsComponent } from '../shared/cards/cards.component';

@Component({
  standalone: true,
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CardsComponent],
})
export class FormsComponent {}
