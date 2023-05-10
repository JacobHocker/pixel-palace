import React from 'react';
import './styles/ThemeButton.css';
import { motion } from 'framer-motion';

const ThemeButton = ({ callback, text }) => {
    return (
        <motion.button onClick={callback} className='themeButton'
        whileHover={{
                scale: [1, 1.2, 1.4, 1, 1],
                borderRadius: ["20%", "20%" , "50%", "50%", "20%"],
                transition: { duration: 2, repeat: Infinity },
            }}
        >
            {text}
        </motion.button>
    )
}

export default ThemeButton