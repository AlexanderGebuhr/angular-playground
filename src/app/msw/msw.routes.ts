import { Routes } from '@angular/router';

export const mswRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./msw.component').then(m => m.MswComponent),
  },
  {
    path: 'options',
    loadComponent: () => import('./options/options-msw.component').then(m => m.OptionsMswComponent),
  },
];
