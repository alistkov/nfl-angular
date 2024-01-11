import { NgFor, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

import { CONFERENCES } from 'src/app/shared/constants';
import { StandingsTableComponent } from 'src/app/standings/standings-table/standings-table.component';

@Component({
  standalone: true,
  imports: [NgFor, UpperCasePipe, StandingsTableComponent],
  selector: 'nfl-division',
  templateUrl: './division.component.html',
})
export class DivisionComponent {
  conferences = CONFERENCES;
}
