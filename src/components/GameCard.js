import React from 'react';
import { motion } from 'framer-motion';
import './styles/GameCard.css';

const GameCard = ({ link, title, img}) => {
    return (
        <motion.div className='cardContainer'
            whileHover={{
                backgroundColor:["#ad13d3cc", "rgba(131,58,180,1)", "rgb(255, 136, 0)", "rgb(255, 0, 234)", "rgba(253,29,29,1)", "rgb(0, 247, 255)", "rgb(21, 255, 0)", "rgba(252,176,69,1)","rgba(131,58,180,1)", "#ad13d3cc"],
                borderColor:["#f8f8f8cc", "rgba(131,58,180,1)", "rgb(255, 136, 0)", "rgb(255, 0, 234)", "rgba(253,29,29,1)", "rgb(0, 247, 255)", "rgb(21, 255, 0)", "rgba(252,176,69,1)","rgba(131,58,180,1)", "#f8f8f8cc"],
                transition:{duration:3.5, repeat: Infinity}
            }}
            >
            <a href={link}>
                <img src={img} alt={`${title}Thumbnail`} className='cardImage' />
                <div className='cardInfo'>
                    <h2 className='cardLink'>{title}</h2>
                </div>
            </a>
        </motion.div>
    )
}

export default GameCard