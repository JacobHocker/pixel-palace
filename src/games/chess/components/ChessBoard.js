import React from 'react';
import '../styles/ChessBoard.css';
import Tile from './Tile';



const ChessBoard = () => {
    let board = [];
    let img = ""
    for (let j = verticalAxis.length - 1; j >= 0; j--) {
        for (let i = 0; i < horizontalAxis.length; i++) {
            const number = j + i + 2;
            board.push(<Tile key={i + 10} img={img} number={number} />)
        }
    }

    return (
        <div className='chessBoard'>
            {board}
        </div>
    )
}

export default ChessBoard