import React from 'react';
import '../styles/ChessBoard.css';

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];


const ChessBoard = () => {

    let board = [];

    for (let j = verticalAxis.length - 1; j >= 0; j--) {
        for (let i = 0; i < horizontalAxis.length; i++) {
            const number = j + i + 2;
            if(number % 2 === 0) {
                board.push(
                <div key={`${j}, ${i}`} className='chessWhiteTile'>
                
                </div>
                )
            } else {
                board.push(
                    <div key={`${j}, ${i}`} className='chessBlackTile'>
                        
                    </div>
                    )
            }
            
        }
    }

    return (
        <div className='chessBoard'>
            {board}
        </div>
    )
}

export default ChessBoard