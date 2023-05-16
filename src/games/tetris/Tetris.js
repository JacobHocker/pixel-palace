import React, { useState } from 'react';

import { createStage } from './helpers/gameHelpers';

// CUSTOM HOOKS
import { useStage } from './hooks/useStage';
import { usePlayer } from './hooks/usePlayer';
import { useGameStatus } from './hooks/useGameStatus';

// STYLED COMPONENTS
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';


// COMPONENTS
import Display from './components/Display';
import Stage from './components/Stage';
import StartButton from './components/StartButton';
import InputsWrapper from './components/InputsWrapper';





const Tetris = () => {
    const [gameOver, setGameOver] = useState(false);


    const [player, resetPlayer] = usePlayer();
    const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
    const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);


    const startGame = () => {
        setStage(createStage())
        setGameOver(false);
        setScore(0);
        setLevel(0);
        setRows(0);
    };
    return (
        <StyledTetrisWrapper>

            <StyledTetris>
                <Stage stage={stage} />
                <aside>
                    {
                        gameOver ?
                        (<Display gameOver={gameOver} />)
                        :
                        (
                            <>
                                <Display text={`Score: `} value={score}/>
                                <Display text={`Rows: `} value={rows}/>
                                <Display text={`Level: `} value={level} />
                            </>
                        )
                    }
                    

                    <StartButton callback={startGame} />
                </aside>
            </StyledTetris>

            <InputsWrapper />
        </StyledTetrisWrapper>
    )
}

export default Tetris