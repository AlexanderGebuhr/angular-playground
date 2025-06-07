import { Routes } from '@angular/router';

export const signalsRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./signals').then(m => m.SignalsComponent),
  },
  {
    path: 'computed',
    loadComponent: () => import('./computed/computed-signal').then(m => m.ComputedSignalComponent),
  },
  {
    path: 'linked',
    loadComponent: () => import('./linked/linked-signal').then(m => m.LinkedSignalComponent),
  },
  {
    path: 'resource',
    loadComponent: () => import('./resource/resource-signal').then(m => m.ResourceSignalComponent),
  },
];
