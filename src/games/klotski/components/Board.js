import React, { useState, useContext } from 'react';
import Tile from './Tile';
import { TILE_COUNT, GRID_SIZE } from '../helpers/constants';
import { canSwap, shuffle, swap, isSolved } from '../helpers/helpers';
import { KlotskiContext } from '../Klotski';

const Board = () => {
    const [tiles, setTiles] = useState([...Array(TILE_COUNT).keys()]);
    

    const { img, isStarted, setIsStarted, boardSize } = useContext(KlotskiContext);

    console.log('is started', isStarted)

    const shuffleTiles = () => {
        const shuffledTiles = shuffle(tiles)
        setTiles(shuffledTiles)
    };

    const swapTiles = (tileIndex) => {
        if (canSwap(tileIndex, tiles.indexOf(tiles.length - 1))) {
            const swappedTiles = swap(tiles, tileIndex, tiles.indexOf(tiles.length - 1));
            setTiles(swappedTiles);
        };
    };

    const handleTileClick = (index) => {
        swapTiles(index);
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
            {hasWon && isStarted && <div>Puzzled Solved</div>}
            {!isStarted ? (<button onClick={() => handleStartClick()}>Start Game</button>) 
            :
            (<button onClick={() => handleShuffleClick()}>Restart Game</button>)
            }
        </>
    )
}

export default Board