import React, { useContext, useEffect } from 'react';
import { WordleContext } from '../Wordle';

const Letter = ({ letterPos, attemptVal }) => {
    const { board, currAttempt, correctWord, setDisabledLetters } = useContext(WordleContext);
    const letter = board[attemptVal][letterPos];


    useEffect(() => {
        if(letter !== "" && !correct && !almost) {
            setDisabledLetters(prev => [...prev, letter])
        }
    }, [currAttempt.attempt])

    const correct = correctWord[letterPos] === letter;
    const almost = !correct && letter !== "" && correctWord.includes(letter);

    const letterState = 
        currAttempt.attempt > attemptVal &&
        (correct ? "wordleCorrect" : almost ? "wordleAlmost" : "wordleError");

    return (
        <div className={currAttempt.letterPos === letterPos && currAttempt.attempt === attemptVal ? 'wordleActiveLetter': 'wordleLetter'} 
        id={letterState}>
            {letter}
        </div>
    )
}

export default Letter