import Card from '@/app/components/Card'
import styles from './page.module.css'
import PlayerHand from '@/app/components/PlayerHand';

export default function Play() {
    const playerCards = [
        { value: '2', suit: 'hearts', hidden: false },
        { value: '10', suit: 'spades', hidden: false },
        { value: 'ace', suit: 'diamonds', hidden: false },
        { value: 'king', suit: 'clubs', hidden: false },
      ];
    return (
        <div>
            
            <PlayerHand cards={playerCards} playerName="Alex"/>
        </div>
    )
}
