import { Component, Input } from '@angular/core';
import { DivisionStandings } from 'src/app/shared/types';

@Component({
  selector: 'nfl-conference-table',
  templateUrl: './conference-table.component.html',
  styleUrls: ['./conference-table.component.css']
})
export class ConferenceTableComponent {
  @Input({ required: true }) division!: string;

  error: Error | null = null
  loaded: boolean = false;
  loading: boolean = false;
  standings: DivisionStandings | null = null;

  getDivisionStandings() {
    console.log('OK');

  }

  calculatePtc(won: number, lost: number, ties: number): number {
    return 1;
  }

  calculatePtcFromString(record: string): number {
    const [won = 0, lost = 0, ties = 0] = record.split('-')
    return this.calculatePtc(Number(won), Number(lost), Number(ties))
  }
}
