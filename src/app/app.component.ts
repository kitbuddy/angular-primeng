import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-PrimeNg';
  loginSuccessful = true;
  display: boolean = true;

  showDialog() {
    this.display = true;
  }
}
