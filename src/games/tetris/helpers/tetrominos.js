export const TETROMINOS = {
    0: {
        shape: [[0]],
        color: '0, 0, 0',
    }, 
    I: {
        shape: [
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
        ],
        color: '0, 253, 253',
    },
}

export const randomTetromino = () => {
    const tetrominos = 'I';
    const randTetromino = tetrominos[Math.floor(Math.random() * tetrominos.length)];

    return TETROMINOS[randTetromino];
}