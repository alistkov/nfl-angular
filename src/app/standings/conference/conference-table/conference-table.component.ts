import { Component, Input } from '@angular/core';
import { Team } from '../../../shared/types'
import { ConferenceStandingsService } from '../conference-standings.service';
import { tap } from 'rxjs';

@Component({
  selector: 'nfl-conference-table',
  templateUrl: './conference-table.component.html',
  styleUrls: ['./conference-table.component.css']
})
export class ConferenceTableComponent {
  @Input({ required: true }) division!: string;

  error: string | null = null
  loaded: boolean = false;
  loading: boolean = false;
  standings: Team[] | [] = [];

  constructor(
    private conferenceStandingsService: ConferenceStandingsService,
  ) {}

  getDivisionStandings() {
    this.loading = true;
    this.conferenceStandingsService.getDivisionStandings(1, 2023, this.division)
      .pipe(
        tap((response) => {
          if (Object.values(response.errors).length !== 0) {
            throw new Error(Object.values(response.errors)[0])
          }
        })
      )
      .subscribe({
        next: (response) => {
          this.standings = response.response;
        },
        error: (err) => {
          this.error = err.message;
        },
      })
      .add(() => {
        this.loading = false;
        this.loaded = true;
      });
  }

  calculatePtc(won: number, lost: number, ties: number): number {
    const totalGames = won + lost + ties
    if (ties === 0) {
      return won / totalGames
    }
    return ((won + ties) / totalGames + (won + ties) / totalGames) / 2
  }

  calculatePtcFromString(record: string): number {
    const [won = 0, lost = 0, ties = 0] = record.split('-')
    return this.calculatePtc(Number(won), Number(lost), Number(ties))
  }
}
