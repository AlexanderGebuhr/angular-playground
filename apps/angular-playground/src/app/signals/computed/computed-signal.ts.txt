import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ExampleComponent } from '../../shared/example/example';
import html from './computed-signal.html.txt';
import ts from './computed-signal.ts.txt';

@Component({
  selector: 'app-computed-signal',
  imports: [ExampleComponent, JsonPipe, MatTabsModule],
  templateUrl: './computed-signal.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComputedSignalComponent {
  readonly code = { ts, html };
  readonly tabs = [
    { label: 'Tab 1', content: 'Content 1' },
    { label: 'Tab 2', content: 'Content 2' },
    { label: 'Tab 3', content: 'Content 3' },
  ];
  readonly selectedIndex = signal(0);
  readonly selectedTab = computed(() => this.tabs[this.selectedIndex()]);
}
