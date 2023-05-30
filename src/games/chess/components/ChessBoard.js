import React, { useState } from 'react';
import '../styles/ChessBoard.css';
import Tile from './Tile';

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];








const ChessBoard = () => {
    let board = [];
    let img = ""
    for (let j = verticalAxis.length - 1; j >= 0; j--) {
        for (let i = 0; i < horizontalAxis.length; i++) {
            const number = j + i + 2;
            board.push(<Tile img={img} number={number} />)
        }
    }

    return (
        <div className='chessBoard'>
            {board}
        </div>
    )
}

export default ChessBoard