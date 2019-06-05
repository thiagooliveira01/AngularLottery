import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-megasena';

  pickedNumbers = [];
  myGames = [];
  lotteryDraw = false;

  constructor() {  }

  setLotteryDraw(lotteryDraw){
    this.lotteryDraw = lotteryDraw;
  }

  setDraw(pickedNumbers) {
    this.pickedNumbers = pickedNumbers;
  }

  newGames(game) {
    this.myGames.push(game);
  }

  registerGame(games) {
    this.myGames = [];
    games.forEach(game => this.newGames(game));
  }
}
