import React, {useEffect} from 'react';
import { TILE_COUNT, GRID_SIZE, BOARD_SIZE } from '../helpers/constants';
import { getMatrixPosition, getVisualPosition } from '../helpers/helpers';
import { motion,  useSpring } from 'framer-motion';


const Tile = (props) => {
    const { tile, index, width, height, handleTileClick, img } = props;
    const { row, col } = getMatrixPosition(index);
    const visualPos = getVisualPosition(row, col, width, height);

    const x = useSpring(0);
    const y = useSpring(0);

    useEffect(() => {
        x.set(visualPos.x)
        y.set(visualPos.y)
    }, [visualPos])
    

    const tileStyle = {
        width: `calc(100% / ${GRID_SIZE})`,
        height: `calc(100% / ${GRID_SIZE})`,
        translateX: x,
        translateY: y,
        backgroundImage: `url(${img})`,
        backgroundSize: `${BOARD_SIZE * 1.25}px`,
        backgroundPosition: `${(100 / (GRID_SIZE - 1)) * (tile % GRID_SIZE)}% ${(100 / (GRID_SIZE - 1)) * (Math.floor(tile / GRID_SIZE))}%`,
    };
    
    return (
            <motion.li
            style={{
                ...tileStyle,
                opacity: tile === TILE_COUNT - 1 ? 0 : 1,
            }}
            className='klotskiTile'
            onClick={() => handleTileClick(index)}
            >
                {img !== "" ? "" : tile + 1}
            </motion.li>
        
    )
}

export default Tile