import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, linkedSignal, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { map, take } from 'rxjs';
import { ExampleComponent } from '../../shared/example/example.component';
import html from './resource-signal.component.html.txt';
import ts from './resource-signal.component.ts.txt';

interface Option {
  value: number;
  label: string;
}

@Component({
  standalone: true,
  selector: 'app-resource-signal',
  templateUrl: './resource-signal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ExampleComponent, JsonPipe, MatCheckboxModule, MatSelectModule],
})
export class ResourceSignalComponent {
  readonly code = { ts, html };
  readonly filterOptions = signal(false);
  readonly filteredOptionsResource = rxResource({
    request: () => {
      return { filter: this.filterOptions() };
    },
    loader: ({ request }) => {
      const { filter } = request;
      return this.httpClient.get<Option[]>('./assets/data/options.json', { params: { filter } }).pipe(
        take(1),
        map(options => (filter ? options.filter(o => o.value % 2 === 0) : options)),
      );
    },
  });
  readonly filteredOptions = linkedSignal<Option[] | undefined, Option[] | undefined>({
    source: this.filteredOptionsResource.value,
    computation: (options, previous) => options ?? previous?.value,
  });
  readonly selectedOption = linkedSignal<Option[] | undefined, Option | null>({
    source: this.filteredOptions,
    computation: (options, previous) => options?.find(o => o.value === previous?.value?.value) ?? null,
  });

  constructor(private readonly httpClient: HttpClient) {}

  selectOption(value: any): void {
    this.selectedOption.set(this.filteredOptions()?.find(o => o.value === value) ?? null);
  }
}
