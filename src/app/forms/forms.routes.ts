import { Routes } from '@angular/router';

export const formsRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./forms.component').then((m) => m.FormsComponent),
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'registration',
    loadComponent: () => import('./registration/registration.component').then((m) => m.RegistrationComponent),
  },
];
