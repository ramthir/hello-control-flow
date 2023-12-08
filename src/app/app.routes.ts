import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'directive',
    loadChildren: () =>
      import('./directive/routes').then((m) => m.DIRECTIVE_ROUTES),
  },
  {
    path: 'control-flow',
    loadChildren: () =>
      import('./control-flow/routes').then((m) => m.CONTROL_FLOW_ROUTES),
  },
  {
    path: 'defer',
    loadChildren: () =>
      import('./defer/routes').then((m) => m.DEFER_ROUTES),
  },
];
