import React, { useContext } from 'react';
import { WordleContext } from '../Wordle';
import { motion } from 'framer-motion';

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
        <motion.div className='wordleKey'
        id={ bigKey ? "wordleBig" : disabled && "wordleDisabled"}
        onClick={selectLetter}
        whileHover={{
            backgroundColor: ["rgb(128,128,128)", "#3a393c", "#505050","#808080", "#696969", "rgb(128,128,128)"],
            transition:{duration:3.5, repeat: Infinity}
        }}
        >
            {keyVal}
        </motion.div>
    )
}

export default Key