import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeamsComponent } from './teams.component';
import { appName } from 'src/app/shared/constants';

const routes: Routes = [
  { path: '', component: TeamsComponent, title: `${appName} | Teams` }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamsRoutingModule {}
