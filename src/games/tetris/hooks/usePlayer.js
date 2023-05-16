import { useState } from "react";

import { TETROMINOS, randomTetromino } from "../helpers/tetrominos";

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos: {x: 0, y: 0},
        tetromino: TETROMINOS[0].shape,
        collided: false,
    });


    return [ player];

}