import { JsonPipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ExampleComponent } from '../../shared/example/example.component';
import html from './computed-signal.component.html.txt';
import ts from './computed-signal.component.ts.txt';

@Component({
  standalone: true,
  selector: 'app-computed-signal',
  templateUrl: './computed-signal.component.html',
  imports: [ExampleComponent, JsonPipe, MatTabsModule],
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
