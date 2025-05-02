import { Component } from '@angular/core';
import { CardsComponent } from '../shared/cards/cards.component';

@Component({
  standalone: true,
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  imports: [CardsComponent],
})
export class SignalsComponent {}
