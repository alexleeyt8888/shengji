import Image from 'next/image';
import React from 'react';
import { Suits } from './enums/Suits';
import { Values } from './enums/Values';
import styles from './PlayerHand.module.css'

interface CardProps {
  suit: Suits;
  value: Values;
}


export default function Card({ suit, value}) {
  return (
    <div>
      <Image
        src={ `/cards/${value}_of_${suit}.svg` }
        alt = {`${value} of ${suit}`}
        width = "0" height = "0"
        className = { styles.playingCard }
      />
    </div>
  );
}