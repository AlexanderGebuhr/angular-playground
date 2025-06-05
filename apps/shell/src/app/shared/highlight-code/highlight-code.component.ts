import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { HighlightCode } from './highlight-code';
import { HighlightCodePipe } from './highlight-code.pipe';

@Component({
  selector: 'app-highlight-code',
  imports: [HighlightCodePipe],
  templateUrl: './highlight-code.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HighlightCodeComponent {
  readonly highlight = input.required<HighlightCode>();
}
