import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  /**
   * Gera um novo jogo dinamicamente
   * @param minimo Valor mínimo a ser considerado (inclusive)
   * @param maximo Valor máximo a ser considerado (inclusive)
   * @param quantidadeNumeros Quantidade de números a ser gerada aleatoriamente
   */
  public randomNumbers(minimo, maximo, quantidadeNumeros) {
    const novoJogo = [];
    let i = 0;

    while (i < quantidadeNumeros) {
      const numero = this.sortearNumero(minimo, maximo);

      /**
       * Só incluímos números ainda não
       * gerados
       */
      if (novoJogo.indexOf(numero) === -1) {
        novoJogo.push(numero);
        i++;
      }
    }
    /**
     * Ao final, retornamos o jogo
     * já ordenado
     */
    return this.ordenarJogo(novoJogo);
  }

  /**
   * Ordena o jogo numericamente
   * @param jogo jogo a ser ordenado
   */
  ordenarJogo(jogo) {
    return jogo.sort((a, b) => a - b);
  }

  /**
   * Sorteia um número aleatoriamente
   * @param {number} minimo Valor mínimo
   * @param {number} maximo Valor máximo
   */
  private sortearNumero(minimo: number, maximo: number) {
    const numeroAleatorio = Math.random() * maximo;
    const floor = Math.floor(numeroAleatorio);
    const numero = Math.max(minimo, floor);
    return numero;
  }
}

