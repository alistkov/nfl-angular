import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeamsComponent } from './teams/teams.component';
import { GamesComponent } from './games/games.component';

const routes: Routes = [
  { path: 'teams', component: TeamsComponent, title: 'NFL App | Teams' },
  { path: 'games', component: GamesComponent, title: 'NFL App | Games' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
