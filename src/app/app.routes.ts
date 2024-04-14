import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./views/home.component') },
  {
    path: 'planets',
    loadComponent: () => import('./views/planet-list/planet-list.component'),
  },
];
