import React from 'react';
import { GamesInfo } from '../assets/helpers/gameInfo';
import Slide from './Slide';
import '../styles/CarouselContainer.css';
import { Carousel } from 'react-responsive-carousel';




const CarouselContainer = () => {
    return (
        <Carousel 
        axis='horizontal' 
        swipeable={true}
        
        showStatus={false}
        showArrows={true}
        showThumbs={false}
        showIndicators={false}
        infiniteLoop={true}
        className='carousel'
        
        >
            
                {GamesInfo.map((game) => (
                    <Slide key={game.id} title={game.title} img={game.img} link={game.link} />
                ))}
            
            
        </Carousel>
            
    )
}

export default CarouselContainer