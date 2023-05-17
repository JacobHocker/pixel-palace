import React, { useState, useEffect } from 'react';

import { createStage, checkCollision } from './helpers/gameHelpers';

// CUSTOM HOOKS
import { useStage } from './hooks/useStage';
import { usePlayer } from './hooks/usePlayer';
import { useGameStatus } from './hooks/useGameStatus';
import { useInterval } from './hooks/useInterval';

// STYLED COMPONENTS
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';


// COMPONENTS
import Display from './components/Display';
import Stage from './components/Stage';
import StartButton from './components/StartButton';
import InputsWrapper from './components/InputsWrapper';
import Legend from './components/Legend';




const Tetris = () => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
    const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
    const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);



    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])

    const movePlayer = dir => {
        if(!checkCollision(player, stage, { x: dir, y:0 })){
            updatePlayerPos({ x:dir, y:0 });
        }
        
    };

    const startGame = () => {
        // Reset Everything
        setStage(createStage());
        setDropTime(1000);
        resetPlayer();
        setGameOver(false);
        setScore(0);
        setLevel(0);
        setRows(0);
    };

    const drop = () => {
        // Increase level when player has cleared 10 rows
        if (rows > (level + 1)) {
            setLevel(prev => prev + 1);
            // Also increase speed
            setDropTime(1000 / (level + 1) + 200)
        }
        if(!checkCollision(player, stage, { x: 0, y:1 })) {
            updatePlayerPos({x: 0, y: 1, collided: false});
        } else {
            // GAME OVER 
            if (player.pos.y < 1) {
                setGameOver(true)
                setDropTime(null)
            }
            updatePlayerPos({x: 0, y: 0, collided: true});
        }
    };

    const keyUp = ( keycode ) => {
        if(!gameOver) {
            if (keycode === "ArrowDown" || keycode === "S") {
                setDropTime(1000 / (level + 1) + 200)
            }
        }
    };


    const dropPlayer = () => {
        setDropTime(null);
        drop();
    };

    const move = ( keycode ) => {
        if (!gameOver) {
            if (keycode === "ArrowLeft" ) {
                movePlayer(-1);
            } else if (keycode === "ArrowRight" ) {
                movePlayer(1);
            } else if (keycode === "ArrowDown" ) {
                dropPlayer();
            } else if (keycode === "ArrowUp" ) {
                playerRotate(stage, 1)
            }
        }
    };

    const moveLeft = () => {
        if(!gameOver) {
            movePlayer(-1);
        };
    };

    const moveRight = () => {
        if(!gameOver) {
            movePlayer(1);
        };
    };

    const moveRotate = () => {
        if(!gameOver) {
            playerRotate(stage, 1);
        }
    };

    const moveDrop = () => {
        if(!gameOver) {
            dropPlayer()
            setDropTime(1000 / (level + 1) + 200)
        }
    }

    useInterval(() => {
        drop()
    }, dropTime);


    return (
        <>
            <Legend />
            <InputsWrapper 
            left={moveLeft}
            right={moveRight}
            rotate={moveRotate}
            down={moveDrop}
            />
            <StyledTetrisWrapper
                role="button"
                tabIndex="0"
                onKeyDown={(e) => move(e.key)}
                onKeyUp={(e) => keyUp(e.key)}
            >

                <StyledTetris>
                    <Stage stage={stage} />
                    <aside>
                        {
                            gameOver ?
                            (<Display gameOver={gameOver} text={"Game Over"} />)
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
            </StyledTetrisWrapper>
        </>
    )
}

export default Tetris