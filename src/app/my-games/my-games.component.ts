import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-my-games',
  templateUrl: './my-games.component.html',
  styleUrls: ['./my-games.component.css']
})
export class MyGamesComponent implements OnInit {

  @Input() pickedNumbers = [];
  @Input() myGames = [];

  @Output() sendGames = new EventEmitter();

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.generateRandomGames();
  }

  generateRandomGames() {
    const newGames = [];
    for (let i = 0; i < 3; i++) {
      newGames.push(this.gameService.randomNumbers(1, 60, 6));
    }
    this.sendGames.emit(newGames);
  }

  pickedNumber(n) {
    return this.pickedNumbers.indexOf(n) !== -1;
  }

}
