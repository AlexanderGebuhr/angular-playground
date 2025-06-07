import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mfe-home',
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
