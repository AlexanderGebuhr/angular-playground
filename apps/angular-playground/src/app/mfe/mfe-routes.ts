/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const mfeRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./mfe').then(m => m.MfeComponent),
  },
  {
    path: 'mfe-app',

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    loadComponent: () => loadRemoteModule('angular-playground-mfe', './Component').then(m => m.AppComponent),
  },
];
