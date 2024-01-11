import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConferenceStandings, DivisionStandings } from '../shared/types';

@Injectable({
  providedIn: 'root'
})
export class StandingsService {
  constructor(
    private http: HttpClient,
  ) {}

  getStandings(params: any) {
    let searchParams = new HttpParams();
    for (const key of Object.keys(params)) {
      searchParams = searchParams.append(key, params[key]);
    }

    return this.http.get<ConferenceStandings | DivisionStandings>('https://v1.american-football.api-sports.io/standings', {
      headers: new HttpHeaders({
        'x-rapidapi-host': '',
        'x-rapidapi-key': ''
      }),
      params: searchParams,
    })
  }
}