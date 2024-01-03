import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DivisionStandings } from 'src/app/shared/types';

@Injectable({
  providedIn: 'root'
})
export class DivisionStandingsService {

  constructor(
    private http: HttpClient,
  ) {}

  getDivisionStandings(league: number, season: number, division: string) {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('league', league);
    searchParams = searchParams.append('season', season);
    searchParams = searchParams.append('division', division);

    return this.http.get<DivisionStandings>('https://v1.american-football.api-sports.io/standings', {
      headers: new HttpHeaders({
        'x-rapidapi-host': '',
        'x-rapidapi-key': ''
      }),
      params: searchParams,
    })
  }
}
