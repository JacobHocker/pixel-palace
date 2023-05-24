import React,{ useContext } from 'react';
import { KlotskiContext } from '../Klotski';
import '../styles/Score.css';

const Score = () => {
    const {moves } = useContext(KlotskiContext);
    return (
        <div className='klotskiScores'>
            <p>Moves: {moves}</p>
            
        </div>
    )
}

export default Score