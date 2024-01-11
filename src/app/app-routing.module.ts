import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { appName } from 'src/app/shared/constants';

const routes: Routes = [
  { path: '', redirectTo: 'standings', pathMatch: 'full' },
  {
    path: 'standings',
    loadChildren: () =>
      import('src/app/standings/routes').
        then(m => m.STANDINGS_ROUTES)
  },
  {
    path: 'teams',
    loadChildren: () =>
      import('src/app/teams/routes')
        .then(m => m.TEAMS_ROUTES),
  },
  {
    path: 'games',
    loadChildren: () =>
      import('src/app/games/routes')
        .then(m => m.GAMES_ROUTES),
  },
  {
    path: '**',
    loadComponent: () =>
      import('src/app/page-not-found/page-not-found.component')
        .then(c => c.PageNotFoundComponent),
    title: `${appName} | Page not found`
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
