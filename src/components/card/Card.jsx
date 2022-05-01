import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip';
import './card.scss'
import MarvelLogoImg from './../../assets/images/MarvelLogo.png'

const Card = ({ card, onClick }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    onClick(card.name);
    setIsFlipped(!isFlipped);
  }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" >
      <img className='card_back' src={MarvelLogoImg} alt="card-back" onClick={handleClick} />
      <img className="card_front" src={card.source} alt="card-front" />
    </ReactCardFlip>
  )
}

export default Card