import React from 'react';
import '../styles/Slide.css';
import {  motion } from 'framer-motion';


const Slide = ({ img, link, title }) => {
    return (
        <motion.div className='slideContainer'
        whileHover={{
            
            borderColor:["#f8f8f8cc", "rgba(131,58,180,1)", "rgb(255, 136, 0)", "rgb(255, 0, 234)", "rgba(253,29,29,1)", "rgb(0, 247, 255)", "rgb(21, 255, 0)", "rgba(252,176,69,1)","rgba(131,58,180,1)", "#f8f8f8cc"],
            transition:{duration:3.5, repeat: Infinity}
        }}
        >
            <a href={link}>
                <img src={img} alt={`${title}Thumbnail`} className='slideImage' />
                <div className='slideInfo'>
                    <h2 className='slideLink'>{title}</h2>
                </div>
            </a>
        </motion.div>
    )
}

export default Slide