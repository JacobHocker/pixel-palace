import React, { useContext, useEffect, useCallback } from 'react';
import { WordleContext } from '../Wordle';
import Key from './Key';
import '../styles/Keyboard.css';


const Keyboard = () => {
    const { onEnter, onDelete, onSelectLetter, disabledLetters } = useContext(WordleContext);

    const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

    const handleKeyboard = useCallback((event) => {
        
        if(event.key === "Enter"){
            onEnter();
        } else if (event.key === "Backspace"){
            onDelete();
        } else {
            keys1.forEach((key) => {
                if(event.key.toLowerCase() === key.toLowerCase()) {
                    onSelectLetter(key);
                }
            });
            keys2.forEach((key) => {
                if(event.key.toLowerCase() === key.toLowerCase()) {
                    onSelectLetter(key);
                }
            });
            keys3.forEach((key) => {
                if(event.key.toLowerCase() === key.toLowerCase()) {
                    onSelectLetter(key);
                }
            });
        }
    })

    useEffect(() => {
        document.addEventListener("keydown", handleKeyboard)
        
        return () => {
            document.removeEventListener("keydown", handleKeyboard)
        }
    }, [handleKeyboard])

    return (
        <div className='wordleKeyboard' onKeyDown={handleKeyboard}>
            <div className='wordleLineOne'>
                {
                    keys1.map((key) => {
                        return <Key key={key} keyVal={key} disabled={disabledLetters.includes(key)} />
                    })
                }
            </div>
            <div className='wordleLineTwo'>
                {
                    keys2.map((key) => {
                        return <Key key={key} keyVal={key} disabled={disabledLetters.includes(key)} />
                    })
                }
            </div>
            <div className='wordleLineThree'>
                
                {
                    keys3.map((key) => {
                        return <Key key={key} keyVal={key} disabled={disabledLetters.includes(key)} />
                    })
                }
                
            </div>
            <div className='wordleLineFour'>
                <Key keyVal="DELETE" bigKey />
                <Key keyVal="ENTER" bigKey />
            </div>
        </div>
    )
}

export default Keyboard