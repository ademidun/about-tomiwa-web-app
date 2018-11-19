import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

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
