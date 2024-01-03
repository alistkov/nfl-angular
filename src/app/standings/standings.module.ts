import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

import { StandingsRoutingModule } from './standings-routing.module';
import { StandingsComponent } from './standings.component';
import { ConferenceComponent } from './conference/conference.component';
import { DivisionComponent } from './division/division.component';
import { ConferenceTableComponent } from './conference/conference-table/conference-table.component';
import { DivisionTableComponent } from './division/division-table/division-table.component';

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
    ConferenceTableComponent,
    DivisionTableComponent,
  ],
})
export class StandingsModule {}
