/*
does not need to display anything
properties:
- array of cards
- deals with selection

*/
import styles from './PlayerHand.module.css'
import Card, { CardProps } from './Card';
import { useState } from 'react';
import { Values, ValuesCode } from './enums/Values';
import { Suits } from './enums/Suits';

// const PlayerHand: React.FC<{ hand: CardProps[] }> = ({ hand }) => {
//     const [cards, setCards] = useState<CardProps[]>(hand);

//     const addCard = (c: CardProps): void => {
//         setCards([...cards, c]);
//         sortHand();
//     }

//     const removeCard = (index: number): void => {
//         setCards(cards.filter((_, i) => i !== index));
//     }

//     const sortHand = (): void => {
//         setCards([...cards].sort((a, b) => {
//             if (a.suit === b.suit) {
//                 return a.value.localeCompare(b.value);
//             }
//             return a.suit.localeCompare(b.suit);
//         }));
//     }

//     return (
//         <div className={styles.hand}>
//             {cards.map((card, index) => {
//                 return (
//                     <div key={index} className={styles.card}>
//                         <Card suit={card.suit} value={card.value} isTrump={card.isTrump} />
//                     </div>
//                 );
//             })}
//         </div>
//     );
// }
// export default PlayerHand;

export class PlayerHand {
    private hand: CardProps[];
    trumpNumber: Values;
    trumpSuit: Suits;
    constructor(hand: CardProps[], trumpNumber: Values, trumpSuit: Suits) {
        this.hand = hand;
        this.trumpNumber = trumpNumber;
        this.trumpSuit = trumpSuit;
        this.sortHand();

    }

    compareValues = (a: Values, b: Values): number => {
        return ValuesCode[a] - ValuesCode[b];
    }

    sortHand(): void {
        this.hand.sort((a, b) => {
            if (a.isTrump === true && b.isTrump !== true) {
                return 1;
            }
            else if (a.isTrump !== true && b.isTrump === true) {
                return -1;
            }
            else if (a.isTrump === true && b.isTrump === true) {
                if (a.suit === Suits.JOKER && b.suit !== Suits.JOKER) {
                    return 1;
                }
                else if (a.suit !== Suits.JOKER && b.suit === Suits.JOKER) {
                    return -1;
                }
                else if (a.suit === Suits.JOKER && b.suit === Suits.JOKER) {
                    return this.compareValues(a.value, b.value);
                }
                if (a.value === this.trumpNumber && b.value !== this.trumpNumber) {
                    return 1;
                }
                else if (a.value !== this.trumpNumber && b.value === this.trumpNumber) {
                    return -1;
                }
                else if (a.value === this.trumpNumber && b.value === this.trumpNumber) {
                    // they are both trump numbers
                    if (a.suit === this.trumpSuit && b.suit !== this.trumpSuit) {
                        return 1;
                    }
                    else if (a.suit !== this.trumpSuit && b.suit === this.trumpSuit) {
                        return -1;
                    }
                    else {
                        return a.suit.localeCompare(b.suit);
                    }
                }
                else {
                    return this.compareValues(a.value, b.value);
                }

            }
            else {
                if (a.suit === b.suit) {
                    return this.compareValues(a.value, b.value);
                }
                return a.suit.localeCompare(b.suit);
            }
        });

    }

    addCard(c: CardProps): void {
        this.hand.push(c);
        this.sortHand();
    }

    removeCard(c: CardProps): void {
        // probably will not work with multiple cards of the same value
        this.hand = this.hand.filter(card => card !== c);
    }

    getHand(): CardProps[] {
        return this.hand;
    }

    display() {
        return (
            <div className={styles.hand}>
                {this.hand.map((card, index) => {
                    return (
                        <div key={index} className={styles.card}>
                            <Card suit={card.suit} value={card.value} isTrump={card.isTrump} />
                        </div>
                    );
                })}
            </div>
        );
    }

}

export default PlayerHand;