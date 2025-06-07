import { Routes } from '@angular/router';

export const mfeRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./mfe').then(m => m.MfeComponent),
  },
  {
    path: 'mfe-app',
    loadChildren: () => import('./mfe-app/mfe-app').then(m => m.mfeAppRoutes),
  },
];
