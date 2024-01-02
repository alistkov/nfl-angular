import { Component } from '@angular/core';
import { CONFERENCES } from 'src/app/shared/constants';

@Component({
  selector: 'nfl-conference',
  templateUrl: './conference.component.html',
  styleUrls: ['./conference.component.css']
})
export class ConferenceComponent {
  conferences = CONFERENCES;
}
