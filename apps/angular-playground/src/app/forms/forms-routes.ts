import { Routes } from '@angular/router';

export const formsRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./forms').then(m => m.FormsComponent),
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login').then(m => m.LoginComponent),
  },
  {
    path: 'registration',
    loadComponent: () => import('./registration/registration').then(m => m.RegistrationComponent),
  },
];
