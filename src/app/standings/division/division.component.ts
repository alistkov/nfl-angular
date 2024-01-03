import { Component } from '@angular/core';
import { CONFERENCES } from 'src/app/shared/constants';

@Component({
  selector: 'nfl-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent {
  conferences = CONFERENCES;
}
