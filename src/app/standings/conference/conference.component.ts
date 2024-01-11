import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

import { CONFERENCES } from 'src/app/shared/constants';
import { StandingsTableComponent } from 'src/app/standings/standings-table/standings-table.component';

@Component({
  standalone: true,
  imports: [NgFor, StandingsTableComponent],
  selector: 'nfl-conference',
  templateUrl: './conference.component.html',
})
export class ConferenceComponent {
  conferences = CONFERENCES;
}
