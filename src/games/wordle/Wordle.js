import React, { useState, useEffect, createContext } from 'react';
import { boardDefault, generateWordSet } from './components/Words';
import './styles/Wordle.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import GameOver from './components/GameOver';


export const WordleContext = createContext();

const Wordle = () => {
    const [board, setBoard] = useState(boardDefault);
    const [wordSet, setWordSet] = useState(new Set());
    const [correctWord, setCorrectWord] = useState("");
    const [disabledLetters, setDisabledLetters] = useState([]);
    
    const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0});
    const [gameOver, setGameOver] = useState({
        gameOver: false,
        guessedWord: false,
    });


    useEffect(() => {
        generateWordSet().then((words) => {
            setWordSet(words.wordSet)
            setCorrectWord(words.todaysWord.toUpperCase())
        })
    }, [])

    const playAgain = () => {
        window.location.reload()
    }

    const onSelectLetter = (keyVal) => {
        if (currAttempt.letterPos > 4) return;
            const newBoard = [...board];
            newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal
            setBoard(newBoard);
            setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1});
    };

    const onDelete = () => {
        if(currAttempt.letterPos === 0) return ;
            const newBoard = [...board];
            newBoard[currAttempt.attempt][currAttempt.letterPos] = ""
            setBoard(newBoard)
            setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos - 1})
    };

    const onEnter = () => {
        if(currAttempt.letterPos !== 5) return;

        let currWord = "";
        for(let i = 0; i < 5; i++){
            currWord += board[currAttempt.attempt][i]
        }

        if (wordSet.has(currWord.toLowerCase())) {
            setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0})
        } else {
            alert("Word Not Found")
        }

        if(currWord === correctWord) {
            setGameOver({gameOver: true, guessedWord: true})
            return;
        }

        if(currAttempt.attempt === 5){
            setGameOver({gameOver: true, guessedWord: false })
        }
        
    };

    return (
        <div className='wordle'>
            <nav className='wordleNav'>
                <h1>Wordle</h1>
            </nav>
            <WordleContext.Provider value={{
                board,
                setBoard,
                currAttempt,
                setCurrAttempt,
                correctWord,
                gameOver,
                setGameOver,
                disabledLetters,
                setDisabledLetters,
                onEnter,
                onDelete,
                onSelectLetter,
            }}>
                <div className='wordleGame'>
                    <Board />
                    { gameOver.gameOver ? <GameOver playAgain={playAgain} /> : <Keyboard />}
                </div>
            </WordleContext.Provider>
        </div>
    )
}

export default Wordle