import React from 'react';
import './Home.css';

import { motion } from 'framer-motion';
import GameChoices from '../components/GameChoices';
import ThemeButton from '../components/ThemeButton';


const Home = ({ setBg, bg }) => {
    

    const setRetroTheme = () => {
        setBg("retro");
    };
    const setCyberTheme = () => {
        setBg("cyber");
    };
    const setModernTheme = () => {
        setBg("modern");
    };
    const setClassicTheme = () => {
        setBg("classic");
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
                    callback={setCyberTheme} 
                    text={"Cyber"}
                    value={"cyber"}
                    />
                    <ThemeButton 
                    bg={bg} 
                    callback={setClassicTheme} 
                    text={"Classic"}
                    value={"classic"}
                    />
                    <ThemeButton 
                    bg={bg} 
                    callback={setRetroTheme} 
                    text={"Retro"} 
                    value={"retro"}
                    />
                    <ThemeButton 
                    bg={bg} 
                    callback={setModernTheme} 
                    text={"Modern"} 
                    value={"modern"}
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