import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'basic',
    title: 'Pipes Básicos',
    loadComponent: () =>
      import('./pages/basic-page/basic-page').then((c) => c.BasicPage),
  },
  {
    path: 'numbers',
    title: 'Pipes Numéricos',
    loadComponent: () =>
      import('./pages/numbers-page/numbers-page').then((c) => c.NumbersPage),
  },
  {
    path: 'uncommon',
    title: 'Pipes no tan comunes',
    loadComponent: () =>
      import('./pages/uncommon-page/uncommon-page').then((c) => c.UncommonPage),
  },
  {
    path: 'custom',
    title: 'Pipes Personalizados',
    loadComponent: () =>
      import('./pages/custom-page/custom-page').then((c) => c.CustomPage),
  },
  {
    path: '**',
    redirectTo: 'basic',
  },
];
