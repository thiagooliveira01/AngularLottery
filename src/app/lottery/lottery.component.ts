import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GameService } from '../game.service';
import { interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-lottery',
  templateUrl: './lottery.component.html',
  styleUrls: ['./lottery.component.css']
})
export class LotteryComponent {

  @Input() pickedNumbers = [];
  @Output() whenDraw = new EventEmitter();
  @Output() sendGames = new EventEmitter();
  @Output() isLoteryDraw = new EventEmitter();

  lotteryDraw = false;

  constructor(private gameService: GameService) {}

  draw() {

    this.lotteryDraw = true;
    this.isLoteryDraw.emit(this.lotteryDraw);
    this.pickedNumbers = [];

    const n = this.gameService.randomNumbers(1, 60, 6);

    interval(300)
      .pipe(
        take(n.length),
        map(index => n[index])
      )
      .subscribe(
        numero => {
          this.pickedNumbers.push(numero);
          this.whenDraw.emit(this.pickedNumbers);
        },
        erro => {
          console.error(erro);
        },
        () => {
          this.lotteryDraw = false;
          this.isLoteryDraw.emit(this.lotteryDraw);
        }
      );
  }

  generateRandomGames() {
    const newGames = [];
    for (let i = 0; i < 3; i++) {
      newGames.push(this.gameService.randomNumbers(1, 60, 6));
    }
    this.sendGames.emit(newGames);
  }
}
