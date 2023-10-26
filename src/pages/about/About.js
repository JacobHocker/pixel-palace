import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className='aboutPage'>
            <div className='aboutHeader'>
                <h1>About Pixel Palace</h1>
            </div>
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



            </div>

        </section>
    )
}

export default About