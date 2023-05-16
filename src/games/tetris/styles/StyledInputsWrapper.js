import styled from "styled-components";

export const StyledInputsWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem;

    @media screen and (min-width: 768px) and (max-width: 1024px){
        display: none;
    }
    @media screen and (min-width: 1024px) {
        display: none;
    }
`