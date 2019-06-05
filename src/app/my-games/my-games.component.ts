import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-games',
  templateUrl: './my-games.component.html',
  styleUrls: ['./my-games.component.css']
})
export class MyGamesComponent implements OnInit {

  @Input() pickedNumbers = [];
  @Input() myGames = [];

  constructor() { }

  pickedNumber(n) {
    return this.pickedNumbers.indexOf(n) !== -1;
  }

  ngOnInit() {}
}
