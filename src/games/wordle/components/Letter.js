import React, { useContext, useEffect } from 'react';
import { WordleContext } from '../Wordle';

const Letter = ({ letterPos, attemptVal }) => {
    const { board, currAttempt } = useContext(WordleContext);
    const letter = board[attemptVal][letterPos];


    return (
        <div className='wordleLetter'>
            {letter}
        </div>
    )
}

export default Letter