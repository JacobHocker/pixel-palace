import React from 'react';
import './styles/GameInfoCard.css';

const GameInfoCard = ({ title, img, inSiteLink }) => {
    
    
    return (
        <div className='gameInfoCard'>
            <div className='gameInfoImgContainer'>
                <img src={img} alt={title} className='gameInfoThumbnail' />
            </div>
            <div className='gameInfoTitle'>
                <h1>{title}</h1>
            </div>

        </div>
    )
}

export default GameInfoCard