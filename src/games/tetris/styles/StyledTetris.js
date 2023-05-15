import styled from "styled-components";

import tetrisBg from '../assets/img/tetrisBg.png';

export const StyledTetrisWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: url(${tetrisBg}) #000;
    background-size: cover;
    overflow: hidden;
`

export const StyledTetris = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    margin: 0 auto;
    max-width: 1200px;

    @media screen and (min-width: 500px) and (max-width: 768px){
        
        
    }
    @media screen and (min-width: 768px) and (max-width: 1024px){
        flex-direction: row;
    }
    @media screen and (min-width: 1024px) {
        flex-direction: row;
    }

    aside {
        width: 100%;
        max-width: 200px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0 20px;
    }

`