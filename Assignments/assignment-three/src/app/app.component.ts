import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  paragraphHidden=false;
  btnClickNumbers = [];

  buttonClicked() {
    this.toggleDisplay();
    this.btnClickNumbers.push(this.btnClickNumbers.length + 1);

  }
  toggleDisplay() {
    this.paragraphHidden = !this.paragraphHidden;
  }

}
