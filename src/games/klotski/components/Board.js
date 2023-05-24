import React, { useState, useContext } from 'react';
import '../styles/Board.css';
import Tile from './Tile';
import {  GRID_SIZE } from '../helpers/constants';
import { canSwap, shuffle, swap, isSolved } from '../helpers/helpers';
import { KlotskiContext } from '../Klotski';
import StartGame from './StartGame';
import Score from './Score';

const Board = () => {
    const { img, isStarted, setIsStarted, boardSize, tiles, setTiles, shuffleTiles, setMoves, moves } = useContext(KlotskiContext);

    console.log('is started', isStarted)

    

    const swapTiles = (tileIndex) => {
        if (canSwap(tileIndex, tiles.indexOf(tiles.length - 1))) {
            const swappedTiles = swap(tiles, tileIndex, tiles.indexOf(tiles.length - 1));
            setTiles(swappedTiles);
        };
    };

    const handleTileClick = (index) => {
        swapTiles(index);
        if( isStarted) {
            setMoves(moves + 1)
        }
    };

    const handleShuffleClick = () => {
        shuffleTiles();
    };

    const handleStartClick = () => {
        shuffleTiles();
        setIsStarted(true)
    }


    const pieceWidth = Math.round(boardSize / GRID_SIZE);
    const pieceHeight = Math.round(boardSize / GRID_SIZE);
    const style = {
        width: boardSize,
        height: boardSize,
    }

    const hasWon = isSolved(tiles)

    return (
        <>
            <ul className='klotskiBoard' style={style}>
                {tiles.map((tile, index) => (
                    <Tile 
                        key={tile}
                        index={index}
                        tile={tile}
                        boardSize={boardSize}
                        width={pieceWidth}
                        height={pieceHeight}
                        handleTileClick={handleTileClick}
                        img={img}
                    />
                ))}
            </ul>
            
            <StartGame 
            isStarted={isStarted} 
            hasWon={hasWon} 
            handleShuffleClick={handleShuffleClick}
            handleStartClick={handleStartClick}
            />
            <Score />
        </>
    )
}

export default Board