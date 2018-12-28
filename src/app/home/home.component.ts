import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Tomiwa';
  ageInput = null;
  me = 'Tomiwa';
  randomPoints = 0;
  playerAge = 30;
  ageDifference = null;

  constructor() {
  }

  ngOnInit() {
  }


  getRandomPoints() {

    this.randomPoints = Math.floor(Math.random() * 85 + 1);
  }

  getAgeDifference() {
    this.ageDifference = this.playerAge - this.ageInput;
  }

}
