import React from 'react';
import GameCard from './GameCard';
import '../styles/GameChoices.css';
import { GamesInfo } from '../assets/helpers/gameInfo';


const GameChoices = () => {
    return (
        <div className='gameChoicesContainer'>
            {GamesInfo.map((game) => (
                    <GameCard key={game.id} title={game.title} img={game.img} link={game.link} />
                ))}
        </div>
    )
}

export default GameChoices