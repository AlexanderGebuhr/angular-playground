import { JsonPipe } from '@angular/common';
import { httpResource } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, DOCUMENT, Inject, OnDestroy, linkedSignal, signal } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { HttpResponse, http } from 'msw';
import { setupWorker } from 'msw/browser';
import options from '../../../assets/data/options.json';
import { ExampleComponent } from '../../shared/example/example.component';
import html from './options-msw.component.html.txt';
import ts from './options-msw.component.ts.txt';

interface Option {
  value: number;
  label: string;
}

@Component({
  selector: 'app-options-msw',
  imports: [ExampleComponent, JsonPipe, MatCheckboxModule, MatSelectModule],
  templateUrl: './options-msw.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionsMswComponent implements OnDestroy {
  readonly code = { ts, html };
  readonly apiStarted = signal(false);
  readonly apiWorker = setupWorker(
    http.get('https://api.angular-playground.com/options', ({ request }) => {
      const url = new URL(request.url);
      const filter = url.searchParams.get('filter');
      const response = filter && JSON.parse(filter) ? options.filter(o => o.value % 2 === 0) : options;
      return HttpResponse.json(response, { status: 200 });
    }),
  );
  readonly filterOptions = signal(false);
  readonly filteredOptionsResource = httpResource<Option[] | undefined>(() =>
    this.apiStarted() ? `https://api.angular-playground.com/options?filter=${this.filterOptions()}` : undefined,
  );
  readonly filteredOptions = linkedSignal<Option[] | undefined, Option[] | undefined>({
    source: this.filteredOptionsResource.value,
    computation: (options, previous) => options ?? previous?.value,
  });
  readonly selectedOption = linkedSignal<Option[] | undefined, Option | null>({
    source: this.filteredOptions,
    computation: (options, previous) => options?.find(o => o.value === previous?.value?.value) ?? null,
  });

  constructor(@Inject(DOCUMENT) private readonly document: Document) {
    const baseHref = this.document.head.querySelector('base')?.getAttribute('href') ?? '/';
    const url = new URL(baseHref + 'mockServiceWorker.js', document.baseURI);
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.apiWorker.start({ serviceWorker: { url: url.href } }).then(() => this.apiStarted.set(true));
  }

  ngOnDestroy(): void {
    this.apiWorker.stop();
  }

  selectOption(value: any): void {
    this.selectedOption.set(this.filteredOptions()?.find(o => o.value === value) ?? null);
  }
}
