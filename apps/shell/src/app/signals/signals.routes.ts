import { Routes } from '@angular/router';

export const signalsRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./signals.component').then(m => m.SignalsComponent),
  },
  {
    path: 'computed',
    loadComponent: () => import('./computed/computed-signal.component').then(m => m.ComputedSignalComponent),
  },
  {
    path: 'linked',
    loadComponent: () => import('./linked/linked-signal.component').then(m => m.LinkedSignalComponent),
  },
  {
    path: 'resource',
    loadComponent: () => import('./resource/resource-signal.component').then(m => m.ResourceSignalComponent),
  },
];
