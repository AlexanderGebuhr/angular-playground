import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { ExampleComponent } from '../../shared/example/example';
import html from './mfe-app-routes.html.txt';
import ts from './mfe-app-routes.ts.txt';

@Component({
  selector: 'app-mfe-app-routes',
  imports: [ExampleComponent, RouterOutlet],
  templateUrl: './mfe-app-routes.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MfeAppRoutesComponent {
  readonly code = { ts, html };
}

export const mfeAppRoutesRoutes: Routes = [
  {
    path: '',
    component: MfeAppRoutesComponent,
    children: [
      {
        path: '',
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
        loadComponent: () => loadRemoteModule('angular-playground-mfe', './AppComponent').then(m => m.AppComponent),
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
        loadChildren: () => loadRemoteModule('angular-playground-mfe', './appRoutes').then(m => m.appRoutes),
      },
    ],
  },
];
