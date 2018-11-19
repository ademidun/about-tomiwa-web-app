import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tomiwa';
  age = '100';
  ageInput= null;
  me = 'Tomiwa';
  randomPoints = 0;
  playerAge = 30;
  ageDifference = null;


  getRandomPoints() {

    this.randomPoints = Math.floor(Math.random() * 10 + 1);
  }

  getAgeDifference() {
    this.ageDifference = this.playerAge - this.ageInput;
  }

}

