import { Component, Input } from '@angular/core';
import { tap } from 'rxjs';
import { Team } from 'src/app/shared/types';
import { StandingsService } from '../standings.service';

@Component({
  selector: 'nfl-standings-table',
  templateUrl: './standings-table.component.html',
  styleUrls: ['./standings-table.component.css']
})
export class StandingsTableComponent {

  @Input({ required: true }) someVar!: string;
  @Input({ required: true }) confOrDiv!: string;

  error: string | null = null
  loaded: boolean = false;
  loading: boolean = false;
  standings: Team[] | [] = [];

  constructor(
    private standingsService: StandingsService,
  ) {}

  loadStandings() {
    this.loading = true;
    this.standingsService.getStandings({ league: 1, season: 2023, [this.confOrDiv]: this.someVar })
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
