import React, { useState } from 'react';
import '../styles/Input.css';

const Input = ({ display, direction, callback }) => {
    

    return (
        <button className={direction === "down" ? 
        'downMobileInput'
        :
        direction === "left" ?
        'leftMobileInput'
        :
        direction === "right" ?
        'rightMobileInput'
        :
        direction === "rotate" ?
        'rotateMobileInput'
        :
        'N/A'
        }
        onClick={callback}
        >
            {display}
        </button>
    )
}

export default Input