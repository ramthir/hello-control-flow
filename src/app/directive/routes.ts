import { Route } from '@angular/router';

export const DIRECTIVE_ROUTES: Route[] = [
  {
    path: 'if',
    loadComponent: () => import('./if/if.component').then((m) => m.IfComponent),
  },
];
