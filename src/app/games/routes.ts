import { Route } from '@angular/router';

import { appName } from 'src/app/shared/constants';

export const GAMES_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('src/app/games/games.component')
        .then(c => c.GamesComponent),
    title: `${appName} | Games`
  }
];
