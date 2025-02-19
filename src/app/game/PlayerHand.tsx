/*
does not need to display anything
properties:
- array of cards
- deals with selection

*/
import styles from './PlayerHand.module.css'
import Card, { CardProps } from './Card';
import { useState } from 'react';

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