import React, { useContext } from 'react';
import { WordleContext } from '../Wordle';

const GameOver = () => {
    const { gameOver, currAttempt, correctWord } = useContext(WordleContext);
    
    return (
        <div className="wordleGameOver">
            <h3>{gameOver.guessedWord ? "You Got It!" : "You Failed To Guess The Word!" }</h3>
            <h1>Answer: {correctWord.toUpperCase()}</h1>
            {gameOver.guessedWord && (<h3>You Guessed In {currAttempt.attempt} Attemps!</h3>)}
        </div>
    )
}

export default GameOver