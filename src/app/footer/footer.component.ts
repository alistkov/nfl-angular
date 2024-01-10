import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  selector: 'nfl-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  logo: string = 'assets/images/logo.svg';
}
