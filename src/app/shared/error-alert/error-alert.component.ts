import { Component } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'nfl-error-alert',
  standalone: true,
  imports: [NgComponentOutlet],
  templateUrl: './error-alert.component.html',
})
export class ErrorAlertComponent {

}
