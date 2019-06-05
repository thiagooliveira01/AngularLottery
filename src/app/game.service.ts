import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  public randomNumbers(min, max, count) {
    const newGame = [];
    let i = 0;

    while (i < count) {
      const num = Math.random() * max;
      const floor = Math.floor(num);
      const n = Math.max(min, floor);

      if (newGame.indexOf(n) === -1) {
        newGame.push(n);
        i++;
      }
    }
    return newGame.sort((a, b) => a - b);
  }
}

