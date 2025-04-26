import { Injectable } from '@angular/core';
import hljs from 'highlight.js';
import { HighlightCode } from './highlight-code';

@Injectable({ providedIn: 'root' })
export class HighlightCodeService {
  highlight(highlight: HighlightCode): string {
    const { code, language } = highlight;
    return hljs.highlight(code, { language }).value;
  }
}
