import { Routes } from '@angular/router';

export const mswRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./msw').then(m => m.MswComponent),
  },
  {
    path: 'options',
    loadComponent: () => import('./options/options-msw').then(m => m.OptionsMswComponent),
  },
];
