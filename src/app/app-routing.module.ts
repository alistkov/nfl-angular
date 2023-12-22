import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeamsComponent } from './teams/teams.component';
import { GamesComponent } from './games/games.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { appName } from './shared/constants';

const routes: Routes = [
  { path: '', redirectTo: 'standings', pathMatch: 'full' },
  { path: 'teams', component: TeamsComponent, title: `${appName} | Teams` },
  { path: 'games', component: GamesComponent, title: `${appName} | Games` },
  { path: '**', component: PageNotFoundComponent, title: `${appName} | Page not found` }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
