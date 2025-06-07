import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, linkedSignal, signal } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { ExampleComponent } from '../../shared/example/example';
import html from './linked-signal.html.txt';
import ts from './linked-signal.ts.txt';

interface Option {
  value: number;
  label: string;
}

@Component({
  selector: 'app-linked-signal',
  imports: [ExampleComponent, JsonPipe, MatCheckboxModule, MatSelectModule],
  templateUrl: './linked-signal.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkedSignalComponent {
  readonly code = { ts, html };
  readonly options: Option[] = [
    { value: 1, label: 'Option 1' },
    { value: 2, label: 'Option 2' },
    { value: 3, label: 'Option 3' },
    { value: 4, label: 'Option 4' },
    { value: 5, label: 'Option 5' },
    { value: 6, label: 'Option 6' },
  ];
  readonly filterOptions = signal(false);
  readonly filteredOptions = computed(() => (this.filterOptions() ? this.options.filter(o => o.value % 2 === 0) : this.options));
  readonly selectedOption = linkedSignal<Option[], Option | null>({
    source: this.filteredOptions,
    computation: (options, previous) => options.find(o => o.value === previous?.value?.value) ?? null,
  });

  selectOption(value: any): void {
    this.selectedOption.set(this.filteredOptions().find(o => o.value === value) ?? null);
  }
}
