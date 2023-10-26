import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <section className='aboutPage'>
            <div className='aboutHeader'>
                <h1>About </h1>
            </div>
            <div className='aboutInfo'>
                <p>Pixel Palace is a passion project for me, as I take my first steps in game development. My entire life I have had a passion for games and 
                    technology.  Re-creating these classics for me was eye opening, on how detailed even the most simple games can be.
                </p>
                <p>This application has fueled my passion and desire to learn even more and continue creating.</p>
                <p>If you find any bugs or would just like to discuss code or games please reach out!</p>
                
            </div>
            <motion.a 
                whileHover={{ 
                    borderColor:["#f8f8f8cc", "rgba(131,58,180,1)", "rgb(255, 136, 0)", "rgb(255, 0, 234)", "rgba(253,29,29,1)", "rgb(0, 247, 255)", "rgb(21, 255, 0)", "rgba(252,176,69,1)","rgba(131,58,180,1)", "#f8f8f8cc"],
                    transition: { duration: 4, repeat: Infinity}
                }}
                href='mailto:jacobdouglas06@gmail.com' target='_blank' className='aboutContact'>
                    Contact Me
                </motion.a>
            <div className='aboutContent'>
                <h1>Built With</h1>

                <div className='aboutBuiltWith'>
                    <h2>Tetris</h2>
                    <div className='builtWithList'>
                        <p>React</p>
                        <p>Styled Components</p>
                        <p>CSS</p>
                    </div>
                </div>

                <div className='aboutBuiltWith'>
                    <h2>Wordle</h2>
                    <div className='builtWithList'>
                        <p>React</p>
                        <p>Styled Components</p>
                        <p>CSS</p>
                    </div>
                </div>

                <div className='aboutBuiltWith'>
                    <h2>Klotski</h2>
                    <div className='builtWithList'>
                        <p>React</p>
                        <p>CSS</p>
                    </div>
                </div>

                <div className='aboutBuiltWith'>
                    <h2>Chess</h2>
                    <div className='builtWithList'>
                        <p>TypeScript</p>
                        <p>CSS</p>
                    </div>
                </div>


            </div>

        </section>
    )
}

export default About