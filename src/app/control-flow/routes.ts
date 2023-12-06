import { Route } from '@angular/router';

export const CONTROL_FLOW_ROUTES: Route[] = [
  {
    path: 'if',
    loadComponent: () => import('./if/if.component').then((m) => m.IfComponent),
  },
  {
    path: 'switch',
    loadComponent: () =>
      import('./switch/switch.component').then((m) => m.SwitchComponent),
  },
  {
    path: 'for',
    loadComponent: () =>
      import('./for/for.component').then((m) => m.ForComponent),
  },
  {
    path: 'switch-with-type',
    loadComponent: () =>
      import('./switch-with-type/switch-with-type.component').then(
        (m) => m.SwitchWithTypeComponent
      ),
  },
  {
    path: 'if-with-type',
    loadComponent: () =>
      import('./if-with-type/if-with-type.component').then(
        (m) => m.IfWithTypeComponent
      ),
  },
];
