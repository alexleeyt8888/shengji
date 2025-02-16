import Card from '@/app/game/Card'
import styles from './page.module.css'
import { Suits } from '../../game/enums/Suits'
import { Values } from '../../game/enums/Values'

export default function Play() {
    // create 4 players

    // randomize deck and give each of the 4 players a set of cards - display the 4 cards

    // display the 4 di pai



    return (
        <div>
            <Card suit={Suits.HEART} value = {Values.KING}/>
        </div>
    )
}
