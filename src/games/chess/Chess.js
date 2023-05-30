import React, { useState } from 'react';
import './styles/Chess.css';
import ChessBoard from './components/ChessBoard';

const Chess = () => {
    
    return (
        <main className='chess'>
            <ChessBoard />
        </main>
    )
}

export default Chess
