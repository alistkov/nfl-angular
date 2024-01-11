import { Route } from '@angular/router';

import { appName } from 'src/app/shared/constants';

export const TEAMS_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('src/app/teams/teams.component')
        .then(c => c.TeamsComponent),
    title: `${appName} | Teams`
  }
];
