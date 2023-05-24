import React, { useContext } from 'react';
import '../styles/StartGame.css';
import { KlotskiContext } from '../Klotski';
import { motion } from 'framer-motion';

const StartGame = (props) => {
    const {isStarted, hasWon, handleShuffleClick, handleStartClick} = props;
    const { moves } = useContext(KlotskiContext)
    
    return (
        <div className='klotskiStartContainer'>
            
            {!isStarted ? 
            (
                <motion.button onClick={() => handleStartClick()}
                className='klotskiStartBtn'
                whileHover={{
                    textShadow: [
                    '0 0 7px #fff, 0 0 10px #fff, 0 0 18px rgb(0, 255, 21), 0 0 28px rgb(0, 255, 21), 0 0 35px rgb(0, 255, 21)',
                    '0 0 7px #fff, 0 0 10px #fff, 0 0 18px rgb(238, 255, 0), 0 0 28px rgb(238, 255, 0), 0 0 35px rgb(238, 255, 0)',
                    '0 0 7px #fff, 0 0 10px #fff, 0 0 18px rgb(0, 255, 242), 0 0 28px rgb(0, 255, 242), 0 0 35px rgb(0, 255, 242)',
                    '0 0 7px #fff, 0 0 10px #fff, 0 0 18px rgb(0, 255, 21), 0 0 28px rgb(0, 255, 21), 0 0 35px rgb(0, 255, 21)',
                ],
                    transition: { duration: 2, repeat: Infinity}
                }}
                >
                    Start Game
                </motion.button>
            ) 
            :
            (
                <motion.button onClick={() => handleShuffleClick()}
                className='klotskiRestartBtn'
                whileHover={{
                    textShadow: [
                    '0 0 7px #fff, 0 0 10px #fff, 0 0 18px rgb(0, 255, 21), 0 0 28px rgb(0, 255, 21), 0 0 35px rgb(0, 255, 21)',
                    '0 0 7px #fff, 0 0 10px #fff, 0 0 18px rgb(238, 255, 0), 0 0 28px rgb(238, 255, 0), 0 0 35px rgb(238, 255, 0)',
                    '0 0 7px #fff, 0 0 10px #fff, 0 0 18px rgb(0, 255, 242), 0 0 28px rgb(0, 255, 242), 0 0 35px rgb(0, 255, 242)',
                    '0 0 7px #fff, 0 0 10px #fff, 0 0 18px rgb(0, 255, 21), 0 0 28px rgb(0, 255, 21), 0 0 35px rgb(0, 255, 21)',
                ],
                    transition: { duration: 2, repeat: Infinity}
                }}
                >
                    Restart Game
                </motion.button>
            )
            }
        </div>
    )
}

export default StartGame