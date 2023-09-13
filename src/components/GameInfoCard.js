import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/GameInfoCard.css';
import { motion } from 'framer-motion';

const GameInfoCard = ({ title, img, inSiteLink, history, objective, wiki }) => {
    const nav = useNavigate();
    
    return (
        <motion.div className='gameInfoCard'
        initial={{ opacity: 0 }}
        animate={{ opacity:1}}
        transition={{ duration:3.5, delay:0.25 }}
        whileInView={{ borderColor:["#f8f8f8cc", "rgba(131,58,180,1)", "rgb(255, 136, 0)", "rgb(255, 0, 234)", "rgba(253,29,29,1)", "rgb(0, 247, 255)", "rgb(21, 255, 0)", "rgba(252,176,69,1)","rgba(131,58,180,1)", "#f8f8f8cc"], transition:{duration: 10, repeat: Infinity}}}
        >
            <div className='gameInfoImgContainer'>
                <img src={img} alt={title} className='gameInfoThumbnail' />
            </div>
            <div className='gameInfoTitle'>
                <h1>{title}</h1>
            </div>
            <div className='gameHistoryContainer'>
                <h3>History</h3>
                <p>{history}</p>
            </div>
            <div className='gameObjectiveContainer'>
                <h3>Objective</h3>
                <p>{objective}</p>
            </div>
            <div className='gameLinkContainer'>
                <motion.button className='gameLinkBtn' onClick={() => nav(inSiteLink)}
                whileHover={{ 
                    borderColor:["#f8f8f8cc", "rgba(131,58,180,1)", "rgb(255, 136, 0)", "rgb(255, 0, 234)", "rgba(253,29,29,1)", "rgb(0, 247, 255)", "rgb(21, 255, 0)", "rgba(252,176,69,1)","rgba(131,58,180,1)", "#f8f8f8cc"],
                    color:["#ffffff",  "rgba(131,58,180,1)", "rgb(255, 136, 0)", "rgb(255, 0, 234)", "rgba(253,29,29,1)", "rgb(0, 247, 255)", "rgb(21, 255, 0)", "rgba(252,176,69,1)","rgba(131,58,180,1)", "#ffffff"],
                    transition: { duration: 4, repeat: Infinity}
                }}
                >
                    Visit Game
                </motion.button>
                <motion.button className='wikiLinkBtn' 
                whileHover={{ 
                    borderColor:["#f8f8f8cc", "rgba(131,58,180,1)", "rgb(255, 136, 0)", "rgb(255, 0, 234)", "rgba(253,29,29,1)", "rgb(0, 247, 255)", "rgb(21, 255, 0)", "rgba(252,176,69,1)","rgba(131,58,180,1)", "#f8f8f8cc"],
                    color:["#ffffff",  "rgba(131,58,180,1)", "rgb(255, 136, 0)", "rgb(255, 0, 234)", "rgba(253,29,29,1)", "rgb(0, 247, 255)", "rgb(21, 255, 0)", "rgba(252,176,69,1)","rgba(131,58,180,1)", "#ffffff"],
                    transition: { duration: 4, repeat: Infinity}
                }}
                >
                    Visit Wiki
                </motion.button>
            </div>

        </motion.div>
    )
}

export default GameInfoCard