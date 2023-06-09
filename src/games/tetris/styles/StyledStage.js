import styled from "styled-components";

export const StyledStage = styled.div`
    display: grid;
    grid-template-rows: repeat(
        ${props => props.height},
        calc(50vw/${props => props.width})
    );
    grid-template-columns: repeat(${props => props.width}, 1fr);
    grid-gap: 1px;
    border: 2px solid #333;
    width: 100%;
    max-width: 50vw;
    background: #111;
    margin-bottom: 2rem;


    @media screen and (min-width: 500px) and (max-width: 768px){
        max-width: 35vw;
        grid-template-rows: repeat(
            ${props => props.height},
            calc(35vw/${props => props.width})
        );
    }
    @media screen and (min-width: 768px) and (max-width: 1024px){
        max-width: 30vw;
        grid-template-rows: repeat(
            ${props => props.height},
            calc(30vw/${props => props.width})
        );
    }
    @media screen and (min-width: 1024px) {
        max-width: 25vw;
        grid-template-rows: repeat(
            ${props => props.height},
            calc(25vw/${props => props.width})
        );
    }
`;