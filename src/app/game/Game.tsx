import { Board2 } from "./Board2";
import { Suits } from "./enums/Suits";
import { Values } from "./enums/Values";

//game calls the board and the player to display the players and baord
export class Game {
  numOfDecks: number;
  numOfPlayers: number;
  board: Board2;
  trumpNumber: Values;
  trumpSuit: Suits;
  constructor(numOfDecks: number, numOfPlayers: number) {
    this.numOfDecks = numOfDecks;
    this.numOfPlayers = numOfPlayers;
    
  }

}