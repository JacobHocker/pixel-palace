import React, {useEffect} from 'react';
import { TILE_COUNT, GRID_SIZE } from '../helpers/constants';
import { getMatrixPosition, getVisualPosition } from '../helpers/helpers';
import { motion,  useSpring } from 'framer-motion';


const Tile = (props) => {
    const { tile, index, width, height, handleTileClick } = props;
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
    }
    
    let translateX = visualPos.x
    let translateY = visualPos.y
    
    
    
    
    return (
        // <>
        //     <li
        //     style={{
        //         ...tileStyle,
                
        //         transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
        //         opacity: tile === TILE_COUNT - 1 ? 0 : 1,
        //     }}
        //     className='klotskiTile'
        //     onClick={() => handleTileClick(index)}
        //     >
        //         {tile + 1}
        //     </li>
        // </>
        
            <motion.li
            style={{
                ...tileStyle,
                
                //transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
                opacity: tile === TILE_COUNT - 1 ? 0 : 1,
            }}
            className='klotskiTile'
            onClick={() => handleTileClick(index)}
            >
                {tile + 1}
            </motion.li>
        
    )
}

export default Tile