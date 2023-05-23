import React, { useState, createContext } from 'react';
import './styles/Klotski.css';
import Board from './components/Board';
import ImgInput from './components/ImgInput';


export const KlotskiContext = createContext();


const Klotski = () => {
    const [img, setImg] = useState("");

    return (
        <KlotskiContext.Provider value={{
            img, 
            setImg,
            }}>
            <div className='klotski'>
                <Board />
                <ImgInput />
            </div>
        </KlotskiContext.Provider>
    )
}

export default Klotski