import { Component } from '@angular/core';

@Component({
  selector: 'nfl-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent {
  notFoundImage: string = 'assets/images/not-found.webp';
}
