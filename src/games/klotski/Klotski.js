import React, { useState, createContext, useEffect } from 'react';
import './styles/Klotski.css';
import Board from './components/Board';
import ImgInput from './components/ImgInput';
import { TILE_COUNT } from './helpers/constants';
import { shuffle } from './helpers/helpers';
import Score from './components/Score';

export const KlotskiContext = createContext();


const Klotski = () => {
    const [img, setImg] = useState("");
    const [ isStarted, setIsStarted] = useState(false);
    const [boardSize, setBoardSize] = useState(300);
    const [tiles, setTiles] = useState([...Array(TILE_COUNT).keys()]);
    const [moves, setMoves] = useState(0);
    

    const shuffleTiles = () => {
        const shuffledTiles = shuffle(tiles)
        setTiles(shuffledTiles)
    };
    
    return (
        <KlotskiContext.Provider value={{
            img, 
            setImg,
            isStarted,
            setIsStarted,
            boardSize,
            tiles,
            setTiles,
            shuffleTiles,
            moves, 
            setMoves,
            }}>
            <div className='klotski'>
                <div className='klotskiHeader'>
                    <h1 className='klotskiTitle'>KLOTSKI</h1>
                </div>
                <Board />
                <ImgInput />
            </div>
        </KlotskiContext.Provider>
    )
}

export default Klotski