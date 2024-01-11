import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  selector: 'nfl-page-not-found',
  templateUrl: './page-not-found.component.html',
})
export class PageNotFoundComponent {
  notFoundImage: string = 'assets/images/not-found.jpg';
}
