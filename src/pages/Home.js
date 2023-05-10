import React from 'react';
import './Home.css';

import { motion } from 'framer-motion';
import GameChoices from '../components/GameChoices';
import ThemeButton from '../components/ThemeButton';

const Home = ({ setBg }) => {

    const setDarkTheme = () => {
        setBg("dark");
    };
    const setPurpleTheme = () => {
        setBg("purple");
    };


    return (
        <main className='homePage'>
            <motion.div
            className="homeTitle"
            animate={{ backgroundSize: "200%" }}
            transition={{ duration: 8, repeat: Infinity }}
            >
                <h1>
                    <span >PIXEL</span>
                    <span>PALACE</span>
                </h1>
            </motion.div>
            <div className='themeSelection'>
                <div className='themeHeader'>
                    <h3>Change Theme</h3>
                </div>
                <div className='themeButtonContainer'>
                    <ThemeButton callback={setPurpleTheme} text={"Cyber Purple"} />
                    <ThemeButton callback={setDarkTheme} text={"Retro Dark"} />
                </div>
            </div>

            <div className='gamesLinkContainer'>
                <div className="gamesLinkHeader">
                    <h3>Choose Game</h3>
                </div>
                <GameChoices />
                
            </div>
            
        </main>
    )
}

export default Home