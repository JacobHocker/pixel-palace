import React, { useState, createContext, useEffect } from 'react';
import './styles/Klotski.css';
import Board from './components/Board';
import ImgInput from './components/ImgInput';
import { randomImg } from './helpers/imgs';

export const KlotskiContext = createContext();


const Klotski = () => {
    const [img, setImg] = useState("");
    const [ isStarted, setIsStarted] = useState(false);
    const [boardSize, setBoardSize] = useState(300);

    
    
    return (
        <KlotskiContext.Provider value={{
            img, 
            setImg,
            isStarted,
            setIsStarted,
            boardSize,
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