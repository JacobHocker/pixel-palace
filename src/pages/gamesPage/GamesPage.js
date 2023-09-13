import React from 'react';
import './GamesPage.css';
import { GamesInfo } from '../../assets/helpers/gameInfo';
import GameInfoCard from '../../components/GameInfoCard';

const GamesPage = () => {
    
    return (
        <main className='gamesPageContainer'>
            <div className='gamesPageHeader'>
                <h1>Games List</h1>
                <p>Browse list of games and learn more.</p>
            </div>
            <div className='gamesPageCardList'>
                { GamesInfo.map((game) => (
                    <GameInfoCard 
                        key={game.id}
                        title={game.title}
                        img={game.img}
                        inSiteLink={game.link}
                        history={game.history}
                        objective={game.objective}
                        wiki={game.wikiLink}
                    />
                ))}
            </div>

        </main>
    )
}

export default GamesPage