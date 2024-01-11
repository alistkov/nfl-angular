import { Component, Input } from '@angular/core';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { map, tap } from 'rxjs';

import { Team } from 'src/app/shared/types';
import { StandingsService } from 'src/app/standings/standings.service';
import { LoaderComponent } from 'src/app/shared/loader/loader.component';
import { ErrorAlertComponent } from 'src/app/shared/error-alert/error-alert.component';

@Component({
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    UpperCasePipe,
    LoaderComponent,
    ErrorAlertComponent,
  ],
  selector: 'nfl-standings-table',
  templateUrl: './standings-table.component.html',
})
export class StandingsTableComponent {

  @Input({ required: true }) standingsTitle!: string;
  @Input({ required: true }) standingsType!: string;

  error: string | null = null
  loaded: boolean = false;
  loading: boolean = false;
  standings: Team[] | [] = [];

  constructor(
    private standingsService: StandingsService,
  ) {}

  loadStandings() {
    this.loading = true;
    this.standingsService.fetchData('standings', { league: 1, season: 2023, [this.standingsType]: this.standingsTitle })
      .pipe(
        tap((response) => {
          if (Object.values(response.errors).length !== 0) {
            throw new Error(Object.values(response.errors)[0])
          }
        }),
        map((response): Team[] => {
          if (this.standingsType === 'division') {
            return response.response;
          }
          const teams = response.response.reduce((acc: { winners: Team[], others: Team[] }, team: Team) => {
            if (team.position === 1) {
              return {
                ...acc,
                winners: [...acc.winners, team].sort(this.sortByPtc.bind(this)),
              }
            }
            return {
              ...acc,
              others: [...acc.others, team].sort(this.sortByPtc.bind(this)),
            }
          }, { winners: [], others: [] });
          return [...teams.winners, ...teams.others];
        })
      )
      .subscribe({
        next: async (response) => {
          this.standings = response;
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

  sortByPtc(firstTeam: Team, secondTeam: Team): -1 | 0 | 1 {
    const firstTeamPtc = this.calculatePtc(firstTeam.won, firstTeam.lost, firstTeam.ties);
    const secondTeamPtc = this.calculatePtc(secondTeam.won, secondTeam.lost, secondTeam.ties);

    if (firstTeamPtc === secondTeamPtc) {
      return 0;
    }
    return firstTeamPtc > secondTeamPtc ? -1 : 1;
  }
}
