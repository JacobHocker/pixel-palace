import React from 'react';
import './Home.css';

import { motion } from 'framer-motion';
import GameChoices from '../components/GameChoices';
import ThemeButton from '../components/ThemeButton';

const Home = ({ setBg, bg }) => {

    const setDarkTheme = () => {
        setBg("dark");
    };
    const setPurpleTheme = () => {
        setBg("purple");
    };
    const setNeonTheme = () => {
        setBg("neon");
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
                    <h3>Themes</h3>
                </div>
                <div className='themeButtonContainer'>
                    <ThemeButton 
                    bg={bg} 
                    callback={setPurpleTheme} 
                    text={"Cyber Purple"}
                    value={"purple"}
                    />
                    
                    <ThemeButton 
                    bg={bg} 
                    callback={setDarkTheme} 
                    text={"Retro Dark"} 
                    value={"dark"}
                    />
                    <ThemeButton 
                    bg={bg} 
                    callback={setNeonTheme} 
                    text={"Modern Neon"} 
                    value={"neon"}
                    />
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