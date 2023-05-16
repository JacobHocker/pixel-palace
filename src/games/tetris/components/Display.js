import React from 'react';
import { StyledDisplay } from '../styles/StyledDisplay';


const Display = ({ gameOver, text, value }) => {
    return (
        <>
            {
                value ?
                <StyledDisplay gameOver={gameOver}>
                    <span>{text}</span>
                    <span>{value}</span>
                </StyledDisplay>
                :
                <StyledDisplay gameOver={gameOver}>
                    {text}
                </StyledDisplay>
            }
        </>
    )
}

export default Display