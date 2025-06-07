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
  {
    path: 'mfe-app-routes',
    loadChildren: () => import('./mfe-app-routes/mfe-app-routes').then(m => m.mfeAppRoutesRoutes),
  },
];
