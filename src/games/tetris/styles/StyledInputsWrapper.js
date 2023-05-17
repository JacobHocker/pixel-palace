import styled from "styled-components";

export const StyledInputsWrapper = styled.div`
    position: fixed;
    z-index: 5;
    width: 100vw;
    bottom: 50px;
    
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    

    @media screen and (min-width: 768px) and (max-width: 1024px){
        display: none;
    }
    @media screen and (min-width: 1024px) {
        display: none;
    }
`