import PlayerHand from "./PlayerHand";

/*
Needs to display username and maybe pfp and score
properties:
- playerhand
- id
- username
- score
*/
export class Player {
  hand: PlayerHand;
  username: string;
  id: number;
  score: number;
  constructor (hand: PlayerHand, username: string, id: number, score: number) {
    this.hand = hand;
    this.username = username;
    this.id = id;
    this.score = score;
  }

  display() {
    return (
        <div>
            <h1>{this.username}</h1>
            <h1>{this.score}</h1>
            {this.hand.display()}
        </div>
    );
}



}