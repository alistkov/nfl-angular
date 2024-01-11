import { Route } from '@angular/router';

import { appName } from 'src/app/shared/constants';

export const STANDINGS_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('src/app/standings/standings.component')
        .then(c => c.StandingsComponent),
    children: [
      { path: '', redirectTo: 'division', pathMatch: 'full' },
      {
        path: 'division',
        loadComponent: () =>
          import('src/app/standings/division/division.component')
            .then(c => c.DivisionComponent),
        title: `${appName} | Division standings`
      },
      {
        path: 'conference',
        loadComponent: () =>
          import('src/app/standings/conference/conference.component')
            .then(c => c.ConferenceComponent),
        title: `${appName} | Conferences standings`
      },
    ]
  },
]
