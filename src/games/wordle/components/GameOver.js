import React, { useContext } from 'react';
import { WordleContext } from '../Wordle';
import { GrRefresh} from 'react-icons/gr';
import '../styles/GameOver.css';
import { motion } from 'framer-motion';

const GameOver = ({ playAgain }) => {
    const { gameOver, currAttempt, correctWord } = useContext(WordleContext);
    
    return (
        <div className="wordleGameOver">
            <h3>{gameOver.guessedWord ? "You Got It!" : "You Failed To Guess The Word!" }</h3>
            <h1>Answer: {correctWord.toUpperCase()}</h1>
            {gameOver.guessedWord && (<h3>You Guessed In {currAttempt.attempt} Attemps!</h3>)}
            <div className='wordlePlayAgain'>
                <motion.button onClick={playAgain} className='wordlePlayAgainBtn'
                whileHover={{
                    backgroundColor: ["rgb(128,128,128)", "#3a393c", "#505050","#808080", "#696969", "rgb(128,128,128)"],
                    transition:{duration:3.5, repeat: Infinity}
                }}
                >
                    <span>Play Again!</span>&nbsp;
                    <span ><GrRefresh className='wordleRefreshIco' /></span>
                </motion.button>
            </div>
        </div>
    )
}

export default GameOver