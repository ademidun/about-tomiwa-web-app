import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tomiwa';
  age = '100';
  ageInput;
  me = 'Tomiwa';
  randomPoints = 0;


  getRandomPoints() {

    this.randomPoints = Math.floor(Math.random() * 10 + 1);
  }

  eatFood(foodName) {

  }

}

