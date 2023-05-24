import React,{ useContext } from 'react';
import { KlotskiContext } from '../Klotski';
import '../styles/Score.css';

const Score = () => {
    const {moves, isStarted, hasWon } = useContext(KlotskiContext);
    return (
        <div className='klotskiScores'>
            { isStarted && hasWon ? 
                <div className='klotskiGameCompleted'>
                    <h1>Finished In {moves} Moves!</h1>
                </div>
                :
                <p className='klotskiScoreDisplay'>Moves: {moves}</p>
            }
            
        </div>
    )
}

export default Score