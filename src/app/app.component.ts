import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from 'src/app/layout/header/header.component';
import { FooterComponent } from 'src/app/layout/footer/footer.component';

@Component({
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterOutlet,
  ],
  selector: 'nfl-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'nfl-app';
}
