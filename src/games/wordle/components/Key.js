import React, { useContext } from 'react';
import { WordleContext } from '../Wordle';

const Key = ({ keyVal, bigKey, disabled }) => {


    return (
        <div className='wordleKey'
        id={ bigKey ? "wordleBig" : disabled && "wordleDisabled"}>
            {keyVal}
        </div>
    )
}

export default Key