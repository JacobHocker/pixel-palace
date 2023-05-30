import React, { useState } from 'react';
import '../styles/ChessBoard.css';
import Tile from './Tile';

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];


class Piece {
    constructor(image, x, y) {
        this.image = image;
        this.x = x;
        this.y = y;
    }
    
}

const pieces = Piece() = [];


for (let p = 0 ; p < 2; p++) {
    const type = p === 0 ? "black" : "white";
    const y = p === 0 ? 7 : 0;
    pieces.push(new Piece(`../assets/imgs/pieces/${type}Rook.webp`, 0, y))
    pieces.push(new Piece(`../assets/imgs/pieces/${type}Rook.webp`, 7, y))
}

console.log(pieces)

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