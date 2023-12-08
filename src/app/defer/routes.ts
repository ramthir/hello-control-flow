import { Route } from '@angular/router';

export const DEFER_ROUTES: Route[] = [
  {
    path: 'idle',
    loadComponent: () =>
      import('./idle/idle.component').then((m) => m.IdleComponent),
  },
  {
    path: 'placeholder',
    loadComponent: () =>
      import('./placeholder/placeholder.component').then(
        (m) => m.PlaceholderComponent
      ),
  },
  {
    path: 'viewport',
    loadComponent: () =>
      import('./viewport/viewport.component').then((m) => m.ViewportComponent),
  },
  {
    path: 'interaction',
    loadComponent: () =>
      import('./interaction/interaction.component').then(
        (m) => m.InteractionComponent
      ),
  },
];
