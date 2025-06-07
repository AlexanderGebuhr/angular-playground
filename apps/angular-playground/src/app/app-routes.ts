import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home').then(m => m.HomeComponent),
  },
  {
    path: 'forms',
    loadChildren: () => import('./forms/forms-routes').then(m => m.formsRoutes),
  },
  {
    path: 'mfe',
    loadChildren: () => import('./mfe/mfe-routes').then(m => m.mfeRoutes),
  },
  {
    path: 'msw',
    loadChildren: () => import('./msw/msw-routes').then(m => m.mswRoutes),
  },
  {
    path: 'signals',
    loadChildren: () => import('./signals/signals-routes').then(m => m.signalsRoutes),
  },
];
