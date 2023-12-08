import { Route } from '@angular/router';

export const DEFER_ROUTES: Route[] = [
  {
    path: 'idle',
    loadComponent: () => import('./idle/idle.component').then((m) => m.IdleComponent),
  },
];
