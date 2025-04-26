import { Component, input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { Language } from '../highlight-code/highlight-code';
import { HighlightCodeComponent } from '../highlight-code/highlight-code.component';

export interface Code {
  ts: string;
  html: string;
  scss?: string;
}

@Component({
  standalone: true,
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss',
  imports: [MatButtonModule, MatCardModule, MatIconModule, MatTabsModule, HighlightCodeComponent],
})
export class ExampleComponent {
  readonly languages = Language;
  readonly label = input<string>();
  readonly code = input<Code>();
  readonly showCode = signal(false);
}
