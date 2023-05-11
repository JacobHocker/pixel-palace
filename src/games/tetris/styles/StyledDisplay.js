import styled from "styled-components";

export const StyledDisplay = styled.div`
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
    font-size: 1rem;
    margin: 0 0 20px 0;
    padding: 15px;
    color: ${props => (props.gameOver ? 'red' : '#999')};
`;