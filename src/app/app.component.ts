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

  constructor() {  }

  /**
   * Esse método é emitido por <app-sorteio>
   * @param numerosSorteados Números que foram sorteados
   
  definirSorteio(numerosSorteados) {
    this.numerosSorteados = numerosSorteados;
  }*/

  newGames(game) {
    this.myGames.push(game);
  }

  registerGame(games) {
    this.myGames = [];
    games.forEach(game => this.newGames(game));
  }
}
