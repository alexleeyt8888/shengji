import Image from 'next/image';
import React from 'react';
import { Suits } from './enums/Suits';
import { Values } from './enums/Values';
import styles from './PlayerHand.module.css'

export interface CardProps {
  suit: Suits;
  value: Values;
  isTrump: boolean;
}

const Card: React.FC<CardProps> = ({ suit, value, isTrump}) => {
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

export default Card