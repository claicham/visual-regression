import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home-page/home-page').then((module) => module.HomePage),
  },
  {
    path: 'riders/:slug',
    loadComponent: () => import('./pages/rider-page/rider-page').then((module) => module.RiderPage),
  },
  {
    path: 'races/:slug',
    loadComponent: () => import('./pages/race-page/race-page').then((module) => module.RacePage),
  },
  {
    path: 'teams/:slug',
    loadComponent: () => import('./pages/team-page/team-page').then((module) => module.TeamPage),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
