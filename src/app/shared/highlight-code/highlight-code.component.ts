import { Component, input } from '@angular/core';
import { HighlightCode } from './highlight-code';
import { HighlightCodePipe } from './highlight-code.pipe';

@Component({
  standalone: true,
  selector: 'app-highlight-code',
  templateUrl: './highlight-code.component.html',
  imports: [HighlightCodePipe],
})
export class HighlightCodeComponent {
  readonly highlight = input.required<HighlightCode>();
}
