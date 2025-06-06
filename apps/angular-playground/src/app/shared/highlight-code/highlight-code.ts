import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { HighlightCodePipe } from './highlight-code-pipe';

export enum Language {
  Typescript = 'typescript',
  Html = 'html',
  Scss = 'scss',
}

export interface HighlightCode {
  code: string;
  language: Language;
}

@Component({
  selector: 'app-highlight-code',
  imports: [HighlightCodePipe],
  templateUrl: './highlight-code.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HighlightCodeComponent {
  readonly highlight = input.required<HighlightCode>();
}
