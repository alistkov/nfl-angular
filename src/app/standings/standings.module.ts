import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StandingsRoutingModule } from './standings-routing.module';
import { StandingsComponent } from './standings.component';
import { ConferenceComponent } from './conference/conference.component';
import { DivisionComponent } from './division/division.component';
import { ConferenceTableComponent } from './conference/conference-table/conference-table.component';

@NgModule({
  imports: [
    CommonModule,
    StandingsRoutingModule,
  ],
  declarations: [
    StandingsComponent,
    ConferenceComponent,
    DivisionComponent,
    ConferenceTableComponent,
  ],
})
export class StandingsModule {}
