import { Pipe, PipeTransform } from '@angular/core';
import { HighlightCode } from './highlight-code';
import { HighlightCodeService } from './highlight-code-service';

@Pipe({ name: 'highlightCode' })
export class HighlightCodePipe implements PipeTransform {
  constructor(private service: HighlightCodeService) {}

  transform(highlight: HighlightCode): string {
    return this.service.highlight(highlight);
  }
}
