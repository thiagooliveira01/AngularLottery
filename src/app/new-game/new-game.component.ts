import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {
  @Input() lotteryDraw = false;
  @Output() submitNewGame = new EventEmitter();

  newGame = [];

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.genGame();
  }

  numberValid(n) {
    return !!n && n >= 1 && n <= 60 && this.uniqueNumber(n);
  }

  private uniqueNumber(unique) {
    const filter = this.newGame.filter(n => n === unique);
    return filter.length === 1;
  }

  gameValid() {
    for (let i = 0; i < this.newGame.length; i++) {
      const n = this.newGame[i];
      if (!this.numberValid(n)) {
        return false;
      }
    }

    return true;
  }

  postGame() {
    this.submitNewGame.emit([...this.newGame.sort((a, b) => a - b)]);
  }

  genGame() {
    this.newGame = this.gameService.randomNumbers(1, 60, 6);
  }

  trackByIndex(index: number, obj: any) {
    return index;
  }

}
