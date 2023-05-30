import React from 'react';
import '../styles/Tile.css';



const Tile = ({ number, img}) => {
    if(number % 2 === 0) {
        return (
            <div className='chessTile whiteTile'><img src={img}  className='chessPieceImg' /></div>
        )
    } else {
        return (
            <div className='chessTile blackTile'></div>
        )
    }
}

export default Tile