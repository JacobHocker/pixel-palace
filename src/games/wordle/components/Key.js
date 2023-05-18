import React, { useContext } from 'react';
import { WordleContext } from '../Wordle';

const Key = ({ keyVal, bigKey, disabled }) => {
    const {  onDelete, onSelectLetter, onEnter } = useContext(WordleContext);

    const selectLetter = () => {
        if(keyVal === "ENTER" ) {
            onEnter()
        } else if(keyVal === "DELETE") {
            onDelete()
        }else {
            onSelectLetter(keyVal)
        }
        
    }
    return (
        <div className='wordleKey'
        id={ bigKey ? "wordleBig" : disabled && "wordleDisabled"}
        onClick={selectLetter}
        >
            {keyVal}
        </div>
    )
}

export default Key