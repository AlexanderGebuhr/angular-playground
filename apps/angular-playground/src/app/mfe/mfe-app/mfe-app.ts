import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { ExampleComponent } from '../../shared/example/example';
import html from './mfe-app.html.txt';
import ts from './mfe-app.ts.txt';

@Component({
  selector: 'app-mfe-app',
  imports: [ExampleComponent, RouterOutlet],
  templateUrl: './mfe-app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MfeAppComponent {
  readonly code = { ts, html };
}

export const mfeAppRoutes: Routes = [
  {
    path: '',
    component: MfeAppComponent,
    children: [
      {
        path: '',
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
        loadComponent: () => loadRemoteModule('angular-playground-mfe', './Component').then(m => m.AppComponent),
      },
    ],
  },
];
