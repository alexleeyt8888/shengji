import Card from '../../game/Card'
import { CardProps } from '../../game/Card'
import styles from './page.module.css'
import { Suits } from '../../game/enums/Suits'
import { Values } from '../../game/enums/Values'
import PlayerHand from '../../game/PlayerHand'

export default function Play() {
    // create 4 players

    // randomize deck and give each of the 4 players a set of cards - display the 4 cards

    // display the 4 di pai

    const cards: CardProps[] = [
        { suit: Suits.HEART, value: Values.ACE, isTrump: false },
        { suit: Suits.SPADE, value: Values.KING, isTrump: true },
        { suit: Suits.DIAMOND, value: Values.TEN, isTrump: false },
        { suit: Suits.CLUB, value: Values.QUEEN, isTrump: false },
        { suit: Suits.HEART, value: Values.JACK, isTrump: true }
    ];
    const hand: PlayerHand = new PlayerHand(cards);

    return (
        <div>
            {hand.display()}
        </div>
    )
}
