import Image from 'next/image';
import React from 'react';

export default function Card({ suit, value, hidden }) {

    return (
        // <div className="card">
        //     {/* '♠', '♥', '♦', '♣' */}
        //     {/* if hidden is true use hidden card image, if not use face up image */}
        //     {hidden ? <Image src="/cards/red_joker.svg" alt='Face-Down' width="100" height="150" layout='intrinsic' className="cardImage"  />
        //        : <Image src={`/cards/${value}_of_${suit}.svg`} alt={`${value} of ${suit}`} width="100" height="150" layout='intrinsic' className='cardImage' />}
        // </div>

        <div className="card">
            {/* '♠', '♥', '♦', '♣' */}
            {/* if hidden is true use hidden card image, if not use face up image */}
            {hidden ? <Image src="/cards/red_joker.svg" alt='Face-Down' width="100" height="150" className="cardImage" />
                : <Image src={`/cards/${value}_of_${suit}.svg`} alt={`${value} of ${suit}`}  width="100" height="150" className='cardImage' />}
        </div>
    );
}