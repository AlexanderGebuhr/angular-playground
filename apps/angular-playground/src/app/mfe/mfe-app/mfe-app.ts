import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { ExampleComponent } from '../../shared/example/example';
// @ts-expect-error TypeScript cannot provide types based on attributes yet
import html from './mfe-app.html' with { loader: 'text' };
// @ts-expect-error TypeScript cannot provide types based on attributes yet
import ts from './mfe-app.ts' with { loader: 'text' };

@Component({
  selector: 'app-mfe-app',
  imports: [ExampleComponent, RouterOutlet],
  templateUrl: './mfe-app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MfeAppComponent {
  readonly code = { ts: ts as string, html: html as string };
}

export const mfeAppRoutes: Routes = [
  {
    path: '',
    component: MfeAppComponent,
    children: [
      {
        path: '',
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
        loadComponent: () => loadRemoteModule('angular-playground-mfe', './AppComponent').then(m => m.AppComponent),
      },
    ],
  },
];
