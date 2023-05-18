import React, { useContext, useEffect, useCallback } from 'react';
import { WorldeContext } from '../Wordle';
import Key from './Key';
import '../styles/Keyboard.css';


const Keyboard = () => {


    const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];


    return (
        <div className='wordleKeyboard'>
            <div className='wordleLineOne'>
                {
                    keys1.map((key) => {
                        return <Key key={key} keyVal={key} />
                    })
                }
            </div>
            <div className='wordleLineTwo'>
                {
                    keys2.map((key) => {
                        return <Key key={key} keyVal={key} />
                    })
                }
            </div>
            <div className='wordleLineThree'>
                
                {
                    keys3.map((key) => {
                        return <Key key={key} keyVal={key} />
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