import { TILE_COUNT, GRID_SIZE } from "./constants";

// Get the linear index from a row/col pair.
export function getIndex(row, col) {
    return parseInt(row, 10) * GRID_SIZE + parseInt(col, 10);
}

// Get the row/col pair from a linear index.
export function getMatrixPosition(index) {
    return {
        row: Math.floor(index / GRID_SIZE),
        col: index % GRID_SIZE,
    };
}

export function getVisualPosition(row, col, width, height) {
    return {
        x: col * width,
        y: row * height,
    };
}