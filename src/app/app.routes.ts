import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'forms',
    loadChildren: () => import('./forms/forms.routes').then(m => m.formsRoutes),
  },
  {
    path: 'signals',
    loadChildren: () => import('./signals/signals.routes').then(m => m.signalsRoutes),
  },
];
