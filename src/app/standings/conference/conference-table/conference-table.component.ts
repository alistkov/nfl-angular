import { Component, Input } from '@angular/core';
import { DivisionStandings } from 'src/app/shared/types';

@Component({
  selector: 'nfl-conference-table',
  templateUrl: './conference-table.component.html',
  styleUrls: ['./conference-table.component.css']
})
export class ConferenceTableComponent {
  @Input({ required: true }) division!: string;

  error = null
  loaded: boolean = true;
  loading: boolean = false;

  standings: DivisionStandings = {
    "get": "standings",
    "parameters": {
      "league": "1",
      "season": "2023",
      "division": "NFC West"
    },
    "errors": [],
    "results": 4,
    "response": [
      {
        "league": {
          "id": 1,
          "name": "NFL",
          "season": 2023,
          "logo": "https://media-4.api-sports.io/american-football/leagues/1.png",
          "country": {
            "name": "USA",
            "code": "US",
            "flag": "https://media-4.api-sports.io/flags/us.svg"
          }
        },
        "conference": "National Football Conference",
        "division": "NFC West",
        "position": 1,
        "team": {
          "id": 14,
          "name": "San Francisco 49ers",
          "logo": "https://media-4.api-sports.io/american-football/teams/14.png"
        },
        "won": 10,
        "lost": 3,
        "ties": 0,
        "points": {
          "for": 380,
          "against": 205,
          "difference": 175
        },
        "records": {
          "home": "5-1",
          "road": "5-2",
          "conference": "8-1",
          "division": "4-0"
        },
        "streak": "W5",
        "ncaa_conference": {
          "won": null,
          "lost": null,
          "points": {
            "for": null,
            "against": null
          }
        }
      },
      {
        "league": {
          "id": 1,
          "name": "NFL",
          "season": 2023,
          "logo": "https://media-4.api-sports.io/american-football/leagues/1.png",
          "country": {
            "name": "USA",
            "code": "US",
            "flag": "https://media-4.api-sports.io/flags/us.svg"
          }
        },
        "conference": "National Football Conference",
        "division": "NFC West",
        "position": 2,
        "team": {
          "id": 31,
          "name": "Los Angeles Rams",
          "logo": "https://media-4.api-sports.io/american-football/teams/31.png"
        },
        "won": 6,
        "lost": 7,
        "ties": 0,
        "points": {
          "for": 299,
          "against": 290,
          "difference": 9
        },
        "records": {
          "home": "3-3",
          "road": "3-4",
          "conference": "4-4",
          "division": "4-1"
        },
        "streak": "L1",
        "ncaa_conference": {
          "won": null,
          "lost": null,
          "points": {
            "for": null,
            "against": null
          }
        }
      },
      {
        "league": {
          "id": 1,
          "name": "NFL",
          "season": 2023,
          "logo": "https://media-4.api-sports.io/american-football/leagues/1.png",
          "country": {
            "name": "USA",
            "code": "US",
            "flag": "https://media-4.api-sports.io/flags/us.svg"
          }
        },
        "conference": "National Football Conference",
        "division": "NFC West",
        "position": 3,
        "team": {
          "id": 23,
          "name": "Seattle Seahawks",
          "logo": "https://media-4.api-sports.io/american-football/teams/23.png"
        },
        "won": 6,
        "lost": 7,
        "ties": 0,
        "points": {
          "for": 280,
          "against": 318,
          "difference": -38
        },
        "records": {
          "home": "4-2",
          "road": "2-5",
          "conference": "5-5",
          "division": "1-4"
        },
        "streak": "L4",
        "ncaa_conference": {
          "won": null,
          "lost": null,
          "points": {
            "for": null,
            "against": null
          }
        }
      },
      {
        "league": {
          "id": 1,
          "name": "NFL",
          "season": 2023,
          "logo": "https://media-4.api-sports.io/american-football/leagues/1.png",
          "country": {
            "name": "USA",
            "code": "US",
            "flag": "https://media-4.api-sports.io/flags/us.svg"
          }
        },
        "conference": "National Football Conference",
        "division": "NFC West",
        "position": 4,
        "team": {
          "id": 11,
          "name": "Arizona Cardinals",
          "logo": "https://media-4.api-sports.io/american-football/teams/11.png"
        },
        "won": 3,
        "lost": 10,
        "ties": 0,
        "points": {
          "for": 230,
          "against": 331,
          "difference": -101
        },
        "records": {
          "home": "2-4",
          "road": "1-6",
          "conference": "2-6",
          "division": "0-4"
        },
        "streak": "W1",
        "ncaa_conference": {
          "won": null,
          "lost": null,
          "points": {
            "for": null,
            "against": null
          }
        }
      }
    ]
  }

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
