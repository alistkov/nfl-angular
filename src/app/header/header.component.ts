import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

import { mainNavigation } from 'src/app/shared/constants';
import { Link } from 'src/app/shared/types';

@Component({
  standalone: true,
  imports: [RouterLink, NgFor],
  selector: 'nfl-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  logo: string = 'assets/images/logo.svg';
  mainNavigation: Link[] = mainNavigation;
}
