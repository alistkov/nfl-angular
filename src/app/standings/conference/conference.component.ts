import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

import { CONFERENCES } from 'src/app/shared/constants';
import { ErrorAlertComponent } from 'src/app/shared/error-alert/error-alert.component';
import { StandingsTableComponent } from 'src/app/standings/standings-table/standings-table.component';

@Component({
  standalone: true,
  imports: [
    NgFor,
    StandingsTableComponent,
    ErrorAlertComponent,
  ],
  selector: 'nfl-conference',
  templateUrl: './conference.component.html',
})
export class ConferenceComponent {
  conferences = CONFERENCES;
}
