import React, { useState } from 'react';
import Tile from './Tile';
import { TILE_COUNT, BOARD_SIZE, GRID_SIZE } from '../helpers/constants';

const Board = () => {
    const [tiles, setTiles] = useState([...Array(TILE_COUNT).keys()]);

    const pieceWidth = Math.round(BOARD_SIZE / GRID_SIZE);
    const pieceHeight = Math.round(BOARD_SIZE / GRID_SIZE);
    const style = {
        width: BOARD_SIZE,
        height: BOARD_SIZE,
    }


    return (
        <>
            <ul className='klotskiBoard' style={style}>
                {tiles.map((tile, index) => (
                    <Tile 
                        key={tile}
                        index={index}
                        tile={tile}
                        width={pieceWidth}
                        height={pieceHeight}
                    
                    />
                ))}
            </ul>
            <button>Start Game</button>
        </>
    )
}

export default Board