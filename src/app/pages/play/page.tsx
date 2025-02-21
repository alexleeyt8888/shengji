import Card from '../../game/Card'
import { CardProps } from '../../game/Card'
import styles from './page.module.css'
import { Suits } from '../../game/enums/Suits'
import { Values } from '../../game/enums/Values'
import PlayerHand from '../../game/PlayerHand'
import { Player } from '../../game/Player'

export default function Play() {
    // create 4 players

    // randomize deck and give each of the 4 players a set of cards - display the 4 cards

    // display the 4 di pai

    const cards: CardProps[] = [
        { suit: Suits.HEART, value: Values.SIX, isTrump: false },
        { suit: Suits.HEART, value: Values.TEN, isTrump: true },
        { suit: Suits.HEART, value: Values.KING, isTrump: false },
        { suit: Suits.HEART, value: Values.ACE, isTrump: false },
        { suit: Suits.HEART, value: Values.TWO, isTrump: true }
    ];
    const hand: PlayerHand = new PlayerHand(cards);
    const p1: Player = new Player(hand, "unknown pink", 1, 0);
    return (
        <div>
            {p1.display()}
        </div>
    )
}
