import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StandingsComponent } from './standings.component';

import { appName } from '../shared/constants';

const routes: Routes = [
  { path: 'standings', component: StandingsComponent, title: `${appName} | Standings` },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StandingsRoutingModule {}
