import React from 'react';
import './styles/Klotski.css';
import Board from './components/Board';

const Klotski = () => {
    return (
        <div className='klotski'>
            <Board />
        </div>
    )
}

export default Klotski