import styled from "styled-components";

export const StyledStartButton = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 4px solid #333;
    min-height: 30px;
    width: 100%;
    border-radius: 20px;
    background: #000;
    font-family: Pixel, cursive;
    font-size: 0.75rem;
    margin: 0 0 10px 0;
    padding: 10px;
    cursor: pointer;

    :hover{
        border: 1px solid red;
    }
    @media screen and (min-width: 500px) and (max-width: 768px){
        font-size: 1rem;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px){
        font-size: 1rem;
    }
    @media screen and (min-width: 1024px) {
        font-size: 1.25rem;
    }
`;