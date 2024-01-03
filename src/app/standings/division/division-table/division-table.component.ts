import { Component, Input } from '@angular/core';
import { tap } from 'rxjs';
import { Team } from 'src/app/shared/types';
import { DivisionStandingsService } from '../division-standings.service';

@Component({
  selector: 'nfl-division-table',
  templateUrl: './division-table.component.html',
  styleUrls: ['./division-table.component.css']
})
export class DivisionTableComponent {
  @Input({ required: true }) division!: string;

  error: string | null = null
  loaded: boolean = false;
  loading: boolean = false;
  standings: Team[] | [] = [];

  constructor(
    private divisionStandingsService: DivisionStandingsService,
  ) {}

  getDivisionStandings() {
    this.loading = true;
    this.divisionStandingsService.getDivisionStandings(1, 2023, this.division)
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
