import React, { useState, useEffect } from 'react'
import './game.scss'
import Card from './../card/Card'
import blackWidowImg from './../../assets/images/BlackWidow.png'
import hulkImg from './../../assets/images/Hulk.png'
import LokiImg from './../../assets/images/Loki.png'
import MoonKnightImg from './../../assets/images/MoonKnight.png'
import RocketImg from './../../assets/images/Rocket.png'
import ThanosImg from './../../assets/images/Thanos.png'
import VisionImg from './../../assets/images/Vision.png'
import WandaImg from './../../assets/images/Wanda.png'
// import cardsJson from './../../assets/json/marvel_cards.json'

const cardsJson = [
  {
    id: 1, name: 'BLACK WIDOW', source: blackWidowImg
  },
  {
    id: 2, name: 'HULK', source: hulkImg
  },
  {
    id: 3, name: 'LOKI', source: LokiImg
  },
  {
    id: 4, name: 'MOON KNIGHT', source: MoonKnightImg
  },
  {
    id: 5, name: 'ROCKET RACCOON', source: RocketImg
  },
  {
    id: 6, name: 'THANOS', source: ThanosImg
  },
  {
    id: 7, name: 'VISION', source: VisionImg
  },
  {
    id: 8, name: 'WANDA', source: WandaImg
  }
]

const shuffleElementsInArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const Game = () => {
  const [gameCards, setGameCards] = useState(
    shuffleElementsInArray.bind(null, cardsJson.concat(cardsJson))
  );
  const [selectedCards, setSelectedCards] = useState([]);
  const [cardsFound, setCardsFound] = useState(0);

  const handleCardClick = (cardName) => {
    if (selectedCards.length < 2) {
      setSelectedCards([...selectedCards, cardName]);
      return
    }
  }

  // shuffle cards when page is loaded
  useEffect(() => {
    setGameCards(shuffleElementsInArray.bind(null, cardsJson.concat(cardsJson)));
  }, [])

  // compare selected cards
  useEffect(() => {
    if (selectedCards.length === 2) {
      if (selectedCards[0] === selectedCards[1]) {
        setCardsFound(cardsFound + 1);
        setSelectedCards([]);
      } else {
        setTimeout(() => {
          setSelectedCards([]);
        }, 1000);
      }
    }
  }, [selectedCards])

  // check if all cards are found
  useEffect(() => {
    if (cardsFound === 8) {
      alert('You won!');
    }
  }, [cardsFound])

  return (
    // Load the cards using css grid and component Card
    <>
      <div className="navbar">
        <h1>Marvel Memory Card Game</h1>
        <div className="controls">
          <h2>Moves: </h2>
          <button>Restart</button>
        </div>
      </div>
      <h2></h2>
      <div className="grid-container">
        {gameCards.map((card, index) => (
          <Card key={index} card={card} onClick={handleCardClick} />
        ))}
      </div>
    </>
  )
}

export default Game