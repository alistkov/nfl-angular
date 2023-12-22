import { Component } from '@angular/core';

@Component({
  selector: 'nfl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  logo: string = 'assets/images/logo.svg';
}
