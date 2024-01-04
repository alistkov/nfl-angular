import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

import { StandingsRoutingModule } from './standings-routing.module';
import { StandingsComponent } from './standings.component';
import { ConferenceComponent } from './conference/conference.component';
import { DivisionComponent } from './division/division.component';
import { StandingsTableComponent } from './standings-table/standings-table.component';

@NgModule({
  imports: [
    CommonModule,
    StandingsRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    StandingsComponent,
    ConferenceComponent,
    DivisionComponent,
    StandingsTableComponent,
  ],
})
export class StandingsModule {}
