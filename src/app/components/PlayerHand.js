import Card from "./Card";
import styles from './PlayerHand.module.css'

export default function PlayerHand({ cards, playerName }) {
    return (
        <div>
            {/* maybe insert profile pic or idk something */}
            <p>{playerName}</p>
            <div className={styles.cardContainer}>
                {cards.map((card, index) => (
                    <Card key={index}
                    suit={card.suit}
                    value={card.value}
                    hidden={card.hidden}
                     />
                ))}
            </div>
        </div>
    )
}