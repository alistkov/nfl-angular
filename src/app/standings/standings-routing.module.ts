import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { appName } from '../shared/constants';
import { StandingsComponent } from './standings.component';
import { ConferenceComponent } from './conference/conference.component';
import { DivisionComponent } from './division/division.component';

const routes: Routes = [
  {
    path: '',
    component: StandingsComponent,
    children: [
      { path: '', redirectTo: 'division', pathMatch: 'full' },
      { path: 'conference', component: ConferenceComponent, title: `${appName} | Conferences standings` },
      { path: 'division', component: DivisionComponent, title: `${appName} | Division standings` }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StandingsRoutingModule {}
