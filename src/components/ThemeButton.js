import React from 'react';
import './styles/ThemeButton.css';


const ThemeButton = ({ callback, text, bg, value }) => {
    return (
        <button onClick={callback} className={bg === value ? 'activeThemeButton' : 'themeButton'}>
            {text}
        </button>
    )
}

export default ThemeButton