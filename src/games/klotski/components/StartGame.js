import React from 'react';
import '../styles/StartGame.css';

const StartGame = (props) => {
    const {isStarted, hasWon, handleShuffleClick, handleStartClick} = props;
    
    return (
        <div className='klotskiStartContainer'>
            {hasWon && isStarted && 
                <div>
                    Puzzled Solved
                </div>
            }
            {!isStarted ? 
            (
                <button onClick={() => handleStartClick()}
                >
                    Start Game
                </button>
            ) 
            :
            (
                <button onClick={() => handleShuffleClick()}>
                    Restart Game
                </button>
            )
            }
        </div>
    )
}

export default StartGame