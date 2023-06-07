import { Piece, Position, samePosition, TeamType} from '../../../helpers/Constants.ts';
import { tileIsEmptyOrOccupiedByOpponent, tileIsOccupied } from './GeneralRules.ts';

export const bishopMove = (initialPosition: Position, desiredPosition: Position, team: TeamType, boardState: Piece[]): boolean => {
    // Movement and attack logic for bishop
    for(let i = 1; i < 8; i++)
    {
        // Up right movement
        if(desiredPosition.x > initialPosition.x && desiredPosition.y > initialPosition.y) {
            let passedPosition: Position = { x: initialPosition.x + i, y: initialPosition.y + i};
            // Check if the tile is the destination tile
            if(samePosition(passedPosition, desiredPosition)) {
                if(tileIsEmptyOrOccupiedByOpponent(passedPosition, boardState, team)) {
                    return true
                }
            } else {
                // Dealing with passing tile
                if(tileIsOccupied(passedPosition, boardState)){
                    break;
                }
            }
        }
        
        // Bottom right movement
        if(desiredPosition.x > initialPosition.x && desiredPosition.y < initialPosition.y) {
            let passedPosition: Position = { x: initialPosition.x + i, y: initialPosition.y - i};
            // Check if the tile is the destination
            if(samePosition(passedPosition, desiredPosition)){
                // Dealing with destination tile
                if(tileIsEmptyOrOccupiedByOpponent(passedPosition, boardState, team)) {
                    return true;
                }
            } else {
                if(tileIsOccupied(passedPosition, boardState)){
                    break;
                }
            }
        }
        
        // Bottom left movement
        if(desiredPosition.x < initialPosition.x && desiredPosition.y < initialPosition.y) {
            let passedPosition: Position = { x: initialPosition.x - i, y: initialPosition.y - i};
            // Check if the tile is the destination tile
            if(samePosition(passedPosition, desiredPosition)) {
                // Dealing with destination tile
                if(tileIsEmptyOrOccupiedByOpponent(passedPosition, boardState, team)) {
                    return true;
                }
            } else {
                if(tileIsOccupied(passedPosition, boardState)) {
                    break;
                }
            }
        }
        
        // Top left movement
        if(desiredPosition.x < initialPosition.x && desiredPosition.y > initialPosition.y) {
            let passedPosition: Position = { x: initialPosition.x - i, y: initialPosition.y + i};
            // Checking if the tile is the destination tile
            if(samePosition(passedPosition, desiredPosition)) {
                // Dealing with destination tile
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