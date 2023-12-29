import { Component } from '@angular/core';
import { standingNavigation } from '../shared/constants';
import { Link } from '../shared/types';

@Component({
  selector: 'nfl-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent {
  standingsNavigation: Link[] = standingNavigation;
}
