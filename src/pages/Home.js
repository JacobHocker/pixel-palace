import React from 'react';
import './Home.css';

import { motion } from 'framer-motion';
import GameChoices from '../components/GameChoices';

const Home = () => {

    
    
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


            <div className='gamesLinkContainer'>
                <div className="gamesLinkTitle">
                    <h3>Choose A Game</h3>
                </div>
                <GameChoices />
                
            </div>
            
        </main>
    )
}

export default Home