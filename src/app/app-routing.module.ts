import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeamsComponent } from './teams/teams.component';
import { GamesComponent } from './games/games.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { appName } from './shared/constants';

const routes: Routes = [
  { path: '', redirectTo: 'standings', pathMatch: 'full' },
  {
    path: 'standings',
    loadChildren: () => import('src/app/standings/standings-routing.module').then(m => m.StandingsRoutingModule)
  },
  {
    path: 'teams',
    loadChildren: () => import('src/app/teams/teams-routing.module').then(m => m.TeamsRoutingModule),
  },
  {
    path: 'games',
    loadChildren: () => import('src/app/games/games-routing.module').then(m => m.GamesRoutingModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    title: `${appName} | Page not found`
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [
    TeamsComponent,
    GamesComponent,
    PageNotFoundComponent
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
