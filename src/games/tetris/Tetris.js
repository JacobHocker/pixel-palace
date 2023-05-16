import React from 'react';


// CUSTOM HOOKS
import { useStage } from './hooks/useStage';


// STYLED COMPONENTS
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';


// COMPONENTS
import Display from './components/Display';
import Stage from './components/Stage';
import StartButton from './components/StartButton';
import InputsWrapper from './components/InputsWrapper';

const Tetris = () => {


    const [stage, setStage] = useStage();


    return (
        <StyledTetrisWrapper>
            <StyledTetris>
                <Stage stage={stage} />
                <aside>
                    <Display text={`Score: 1000`} />
                    <Display text={`Rows: 2`} />
                    <Display text={`Level: 4`} />
                    <StartButton />
                </aside>
            </StyledTetris>
            <InputsWrapper />
        </StyledTetrisWrapper>
    )
}

export default Tetris