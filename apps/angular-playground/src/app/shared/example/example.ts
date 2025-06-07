import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { HighlightCodeComponent, Language } from '../highlight-code/highlight-code';

export interface Code {
  ts: string;
  html: string;
  scss?: string;
}

@Component({
  selector: 'app-example',
  imports: [MatButtonModule, MatCardModule, MatIconModule, MatTabsModule, HighlightCodeComponent],
  templateUrl: './example.html',
  styleUrl: './example.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleComponent {
  readonly languages = Language;
  readonly label = input<string>();
  readonly code = input<Code>();
  readonly showCode = signal(false);
}
