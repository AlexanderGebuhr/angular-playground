export enum Language {
  Typescript = 'typescript',
  Html = 'html',
  Scss = 'scss',
}

export interface HighlightCode {
  code: string;
  language: Language;
}
