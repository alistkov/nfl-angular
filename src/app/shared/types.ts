export interface Link {
  link: string
  label: string
}

export interface Team {
  "league": {
    "id": number
    "name": string
    "season": number
    "logo": string
    "country": {
      "name": string
      "code": string
      "flag": string
    }
  }
  "conference": "American Football Conference" | "National Football Conference",
  "division": string
  "position": number
  "team": {
    "id": number
    "name": string
    "logo": string
  }
  "won": number
  "lost": number
  "ties": number
  "points": {
    "for": number
    "against": number
    "difference": number
  }
  "records": {
    "home": string
    "road": string
    "conference": string
    "division": string
  }
  "streak": string
  "ncaa_conference": {
    "won": null
    "lost": null
    "points": {
      "for": null
      "against": null
    }
  }
}

export interface DivisionStandings {
  "get": string
  "parameters": {
    "league": string | number
    "season": string | number
    "division": string
  },
  "errors": [],
  "results": number
  "response": Team[]
}
