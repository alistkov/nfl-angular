import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { appName } from 'src/app/shared/constants';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games.component';

const routes: Routes = [
  {
    path: '',
    component: GamesComponent,
    title: `${appName} | Games`
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesRoutingModule {}
