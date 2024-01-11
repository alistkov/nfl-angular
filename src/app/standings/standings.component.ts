import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { standingNavigation } from 'src/app/shared/constants';
import { Link } from 'src/app/shared/types';

@Component({
  standalone: true,
  imports: [NgFor, RouterLink, RouterOutlet],
  selector: 'nfl-standings',
  templateUrl: './standings.component.html',
})
export class StandingsComponent {
  standingsNavigation: Link[] = standingNavigation;
}
