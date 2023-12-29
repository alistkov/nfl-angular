import { Component } from '@angular/core';
import { mainNavigation } from '../shared/constants';
import { Link } from '../shared/types';

@Component({
  selector: 'nfl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  logo: string = 'assets/images/logo.svg';
  mainNavigation: Link[] = mainNavigation;
}
