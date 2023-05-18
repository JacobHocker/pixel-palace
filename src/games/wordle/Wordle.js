import React, { useState, useEffect, createContext } from 'react';
import { boardDefault } from './components/Words';
import './styles/Wordle.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';


export const WordleContext = createContext();

const Wordle = () => {
    const [board, setBoard] = useState(boardDefault);
    const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0});

    return (
        <div className='wordle'>
            <nav className='wordleNav'>
                <h1>Wordle</h1>
            </nav>
            <WordleContext.Provider value={{
                board,
                setBoard,
                currAttempt,
                setCurrAttempt
            }}>
                <div className='wordleGame'>
                    <Board />
                    <Keyboard />
                </div>
            </WordleContext.Provider>
        </div>
    )
}

export default Wordle