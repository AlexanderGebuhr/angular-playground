import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ExampleComponent } from '../../shared/example/example';
// @ts-expect-error TypeScript cannot provide types based on attributes yet
import html from './computed-signal.html' with { loader: 'text' };
// @ts-expect-error TypeScript cannot provide types based on attributes yet
import ts from './computed-signal.ts' with { loader: 'text' };

@Component({
  selector: 'app-computed-signal',
  imports: [ExampleComponent, JsonPipe, MatTabsModule],
  templateUrl: './computed-signal.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComputedSignalComponent {
  readonly code = { ts: ts as string, html: html as string };
  readonly tabs = [
    { label: 'Tab 1', content: 'Content 1' },
    { label: 'Tab 2', content: 'Content 2' },
    { label: 'Tab 3', content: 'Content 3' },
  ];
  readonly selectedIndex = signal(0);
  readonly selectedTab = computed(() => this.tabs[this.selectedIndex()]);
}
