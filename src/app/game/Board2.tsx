import { CardProps } from "./Card";
import { Suits } from "./enums/Suits";
import { Values } from "./enums/Values";
import { Player } from "./Player";
import PlayerHand from "./PlayerHand";

export class Board2 {
  players: Player[];
  numOfPlayers: number;
  numOfDecks: number;
  includeJokers: boolean;
  trumpNumber: Values;
  trumpSuit: Suits;
  deck: CardProps[];

  constructor(numOfPlayers: number, numOfDecks: number, includeJokers: boolean, trumpNumber: Values, trumpSuit: Suits) {
    this.numOfPlayers = numOfPlayers;
    this.numOfDecks = numOfDecks;
    this.includeJokers = includeJokers;
    this.players = [];
    this.trumpNumber = trumpNumber;
    this.trumpSuit = trumpSuit;
    
  }

  boardSetUp() {
    this.deck = this.shuffleDeck(this.initDeck());
    // test
    this.addAllPlayers();
    this.distributeCards();
  }

  addAllPlayers() {
    for (let i = 0; i < this.numOfPlayers; i++) {
      this.players.push(new Player(new PlayerHand([], this.trumpNumber, this.trumpSuit), `Player ${i + 1}`, i + 1, 0));
    }
  }

  initDeck(): CardProps[] {
    let suits: Suits[] = [Suits.CLUB, Suits.DIAMOND, Suits.HEART, Suits.SPADE];
    let values: Values[] = [Values.ACE, Values.TWO, Values.THREE, Values.FOUR, Values.FIVE, 
      Values.SIX, Values.SEVEN, Values.EIGHT, Values.NINE, Values.TEN, Values.JACK, Values.QUEEN, Values.KING];
    let deck: CardProps[] = [];
    for (let i = 0; i < this.numOfDecks; i++) {
      for (let suit of suits) {
        for (let value of values) {
          deck.push({ suit: suit, value: value, isTrump: (suit === this.trumpSuit || value === this.trumpNumber) });
        }
      }
      if (this.includeJokers) {
        deck.push({ suit: Suits.JOKER, value: Values.SJOKER, isTrump: true });
        deck.push({ suit: Suits.JOKER, value: Values.BJOKER, isTrump: true });
      }
    }
    return deck;
  }

  shuffleDeck(deck: CardProps[]): CardProps[] {
    let shuffledDeck: CardProps[] = [];
    while (deck.length > 0) {
      let index = Math.floor(Math.random() * deck.length);
      shuffledDeck.push(deck[index]);
      deck.splice(index, 1);
    }
    return shuffledDeck;
  }

  addPlayers(player: Player) {
    this.players.push(player);
  }


  distributeCards() {
    

    let handSize: number = Math.floor(this.deck.length / this.numOfPlayers) - 1;
    for (let i = 0; i < handSize; i++) {
      for (let j = 0; j < this.numOfPlayers; j++) {
        this.players[j].hand.addCard(this.deck.pop());
      }
    }
  }


  

  display() {
    return (
      <div>
        {this.players.map((player, index) => {
          return (
            <div key={index}>
              {player.display()}
            </div>
          );
        })}
      </div>
    );
  }
}
