import {  samePosition } from '../Constants.ts';
import { TeamType } from '../Types.ts';
import { Piece } from '../../models/Piece.ts';
import { Position } from '../../models/Position.ts';
import { tileIsEmptyOrOccupiedByOpponent, tileIsOccupied, tileIsOccupiedByOpponent } from './GeneralRules.ts';

export const rookMove = (initialPosition: Position, desiredPosition: Position, team: TeamType, boardState: Piece[]): boolean => {
    if(initialPosition.x === desiredPosition.x) {

        for(let i = 1; i < 8; i++) {
        let multiplier = (desiredPosition.y < initialPosition.y) ? -1 : 1;
          let passedPosition = new Position ( initialPosition.x,  initialPosition.y + (i * multiplier)); 
            if(passedPosition.samePosition( desiredPosition)) {
            if(tileIsEmptyOrOccupiedByOpponent(passedPosition, boardState, team)) {
                return true;
            }
            } else {
            if(tileIsOccupied(passedPosition, boardState)) {
                break;
                }
            }
        }
    }
    if(initialPosition.y === desiredPosition.y) {

        for(let i = 1; i < 8; i++) {
        let multiplier = (desiredPosition.x < initialPosition.x) ? -1 : 1;
          let passedPosition = new Position ( initialPosition.x + (i * multiplier),  initialPosition.y);
        if(passedPosition.samePosition( desiredPosition)) {
            if(tileIsEmptyOrOccupiedByOpponent(passedPosition, boardState, team)) {
                return true;
            }
            } else {
            if(tileIsOccupied(passedPosition, boardState)) {
                break;
                }
            }
        }
    }
        return false;
}

export const getPossibleRookMoves = (rook: Piece, boardstate: Piece[]): Position[] => {
    const possibleMoves: Position[] = [];

    // Top movement
    for (let i = 1; i < 8; i++) {
        const destination = new Position ( rook.position.x,  rook.position.y + i );

        // Stop checking if move is outside of the board
        if(rook.position.y + i > 7) break;

        if (!tileIsOccupied(destination, boardstate)) {
            possibleMoves.push(destination);
        } else if (tileIsOccupiedByOpponent(destination, boardstate, rook.team)) {
            possibleMoves.push(destination);
            break;
        } else {
            break;
        }
    }

    // Bottom movement
    for (let i = 1; i < 8; i++) {
        const destination = new Position ( rook.position.x,  rook.position.y - i );

        // Stop checking if move is outside of the board
        if(rook.position.y + i > 7) break;

        if (!tileIsOccupied(destination, boardstate)) {
            possibleMoves.push(destination);
        } else if (tileIsOccupiedByOpponent(destination, boardstate, rook.team)) {
            possibleMoves.push(destination);
            break;
        } else {
            break;
        }
    }

    // Left movement
    for (let i = 1; i < 8; i++) {
        const destination = new Position ( rook.position.x - i,  rook.position.y );

        // Stop checking if move is outside of the board
        if(rook.position.y + i > 7) break;

        if (!tileIsOccupied(destination, boardstate)) {
            possibleMoves.push(destination);
        } else if (tileIsOccupiedByOpponent(destination, boardstate, rook.team)) {
            possibleMoves.push(destination);
            break;
        } else {
            break;
        }
    }

    // Right movement
    for (let i = 1; i < 8; i++) {
        const destination = new Position ( rook.position.x + i,  rook.position.y );

        // Stop checking if move is outside of the board
        if(rook.position.y + i > 7) break;
        
        if (!tileIsOccupied(destination, boardstate)) {
            possibleMoves.push(destination);
        } else if (tileIsOccupiedByOpponent(destination, boardstate, rook.team)) {
            possibleMoves.push(destination);
            break;
        } else {
            break;
        }
    }

    return possibleMoves;
}