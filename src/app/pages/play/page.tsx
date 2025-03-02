import Card from '../../game/Card'
import { CardProps } from '../../game/Card'
import styles from './page.module.css'
import { Suits } from '../../game/enums/Suits'
import { Values } from '../../game/enums/Values'
import PlayerHand from '../../game/PlayerHand'
import { Player } from '../../game/Player'
import { Board2 } from '../../game/Board2'

export default function Play() {
    // create 4 players

    // randomize deck and give each of the 4 players a set of cards - display the 4 cards

    // display the 4 di pai
    
    const board: Board2 = new Board2(5, 3, true, Values.TWO, Suits.HEART);
    board.boardSetUp();
    return (
        <div>
            {board.display()}
        </div>
    )
}
