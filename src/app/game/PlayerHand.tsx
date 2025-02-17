/*
does not need to display anything
properties:
- array of cards
- deals with selection

*/
import styles from './PlayerHand.module.css'
import { CardProps } from './Card';


export class PlayerHand {
    private hand: CardProps[];
    constructor(hand: CardProps[]) {
        this.hand = hand;
    }

    sortHand(): void {
        this.hand.sort((a, b) => {
            if (a.suit === b.suit) {
                return a.value.localeCompare(b.value);
            }
            return a.suit.localeCompare(b.suit);
        });
    }


}