import Image from 'next/image';
import React from 'react';
import styles from './PlayerHand.module.css'


export default function Card({ key, suit, value, hidden }) {
    // var index = key;
    
    return (
        // <div className="card">
        //     {/* '♠', '♥', '♦', '♣' */}
        //     {/* if hidden is true use hidden card image, if not use face up image */}
        //     {hidden ? <Image src="/cards/red_joker.svg" alt='Face-Down' width="100" height="150" layout='intrinsic' className="cardImage"  />
        //        : <Image src={`/cards/${value}_of_${suit}.svg`} alt={`${value} of ${suit}`} width="100" height="150" layout='intrinsic' className='cardImage' />}
        // </div>

        <div>
            {/* '♠', '♥', '♦', '♣' */}
            {/* if hidden is true use hidden card image, if not use face up image */}

            {hidden ? <Image
                src="/cards/red_joker.svg"
                alt='Face-Down'
                width="0" height="0"
                layout='responsive'
                style={{ '--index': key }}
                className={styles.playingCard}
            />
                :
                <Image
                    src={`/cards/${value}_of_${suit}.svg`}
                    alt={`${value} of ${suit}`}
                    width="0" height="0"
                    layout='responsive'
                    style={{ '--index': key }}
                    className={styles.playingCard}
                />}
        </div>
    );
}