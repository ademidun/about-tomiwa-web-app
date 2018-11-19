import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-math-games',
  templateUrl: './math-games.component.html',
  styleUrls: ['./math-games.component.scss']
})
export class MathGamesComponent implements OnInit {

  showAnswerFractions = false;
  checkAnswerFractions = false;
  userAnswerFractions = null;

  fractionsAnswer = 18;

  variableK = 28;
  variableX = 5;

  result1 = 12 + this.variableK;
  result2 = 12 + this.variableK - this.variableX;

  showAnswer = false;
  checkAnswer = false;
  userAnswer = null;

  showLevel2Fractions = false;

  constructor() { }

  ngOnInit() {
  }

}
