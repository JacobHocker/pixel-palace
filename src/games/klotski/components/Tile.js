import React from 'react';
import { TILE_COUNT, GRID_SIZE } from '../helpers/constants';
import { getMatrixPosition, getVisualPosition } from '../helpers/helpers';


const Tile = (props) => {
    const { tile, index, width, height } = props;

    const { row, col } = getMatrixPosition(index);
    const visualPos = getVisualPosition(row, col, width, height);
    const tileStyle = {
        width: `calc(100% / ${GRID_SIZE})`,
        height: `calc(100% / ${GRID_SIZE})`,
        translateX: visualPos.x,
        translateY: visualPos.y,
    }

    return (
        <>
            
            <li
            style={{
                ...tileStyle,
                transform: `translate3d(${visualPos.x}px, ${visualPos.y}px, 0)`,
                opacity: tile === TILE_COUNT - 1 ? 0 : 1,
            }}
            className='klotskiTile'>
                {tile + 1}
            </li>
        </>
        
    )
}

export default Tile