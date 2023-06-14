import React, { useRef, useEffect, useState } from 'react';
import '../styles/ChessBoard.css';
import Tile from './Tile.tsx';
import { 
    VERTICAL_AXIS, 
    HORIZONTAL_AXIS, 
    samePosition

} from "../helpers/Constants.ts";
import { Piece } from '../models/Piece.ts';
import { Position } from '../models/Position.ts';

interface Props {
    playMove: (piece: Piece, position: Position) => boolean;
    pieces: Piece[];
}

export default function ChessBoard({ playMove, pieces} : Props) {
    const [activePiece, setActivePiece] = useState<HTMLElement | null>(null);
    const [grabPosition, setGrabPosition] = useState<Position>(new Position(-1, -1));
    
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [pieceSize, setPieceSize] = useState(35);
    const [boardSize, setBoardSize] = useState(280);
    const chessBoardRef = useRef<HTMLDivElement>(null);
    

    
    let board = [];

    
    useEffect(() => {
        if (windowWidth > 500 && windowWidth < 768) {
            setPieceSize(50);
            setBoardSize(400);
        }else if (windowWidth >= 768 && windowWidth < 1024) {
            setPieceSize(75);
            setBoardSize(600);
        } else if (windowWidth >= 1024) {
            setPieceSize(100);
            setBoardSize(800);
        } else {
            setPieceSize(35);
            setBoardSize(280);
        }
    }, [windowWidth]);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, [])

    

    // Mouse Events
    function grabPieceMouse(e: React.MouseEvent) {
        const element = e.target as HTMLElement;
        const chessBoard = chessBoardRef.current;
        if(element.classList.contains("chessPiece") && chessBoard){
            const grabX = Math.floor((e.clientX - chessBoard.offsetLeft) / pieceSize);
            const grabY = Math.abs(Math.ceil((e.clientY - chessBoard.offsetTop - boardSize) / pieceSize))
            setGrabPosition(new Position(grabX, grabY));
            const x = e.clientX - Math.abs(Math.ceil(pieceSize / 2));
            const y = e.clientY - Math.abs(Math.ceil(pieceSize / 2));
            element.style.position = "absolute";
            element.style.left = `${x}px`;
            element.style.top = `${y}px`;

            setActivePiece(element)
        }
    }
    function movePieceMouse(e: React.MouseEvent) {
        const chessBoard = chessBoardRef.current;
        if (activePiece && chessBoard) {
            const minX = chessBoard.offsetLeft - Math.abs(Math.ceil(pieceSize / 4));
            const minY = chessBoard.offsetTop - Math.abs(Math.ceil(pieceSize / 4));
            const maxX = chessBoard.offsetLeft + chessBoard.clientWidth - Math.abs(Math.ceil(pieceSize / 4) * 3);
            const maxY = chessBoard.offsetTop + chessBoard.clientHeight - Math.abs(Math.ceil(pieceSize / 4) * 3);
            const x = e.clientX - Math.abs(Math.ceil(pieceSize / 2));
            const y = e.clientY - Math.abs(Math.ceil(pieceSize / 2));
            activePiece.style.position = "absolute";

            // If X is smaller than minimum amount
            if (x < minX) {
                activePiece.style.left = `${minX}px`;
            }
            // If X is bigger than maximum amount
            else if (x > maxX){
                activePiece.style.left = `${maxX}px`;
            } else {
                activePiece.style.left = `${x}px`;
            }
            // If Y is smaller than minimum amount
            if(y < minY) {
                activePiece.style.top = `${minY}px`;
            } 
            // If Y is bigger than maximum amount
            else if (y > maxY) {
                activePiece.style.top = `${maxY}px`;
            } else {
                activePiece.style.top = `${y}px`;
            }
        }
    }
    function dropPieceMouse(e: React.MouseEvent ) {
        const chessBoard = chessBoardRef.current;
        if(activePiece && chessBoard){
            const x = Math.floor((e.clientX - chessBoard.offsetLeft) / pieceSize);
            const y = Math.abs(
                Math.ceil((e.clientY - chessBoard.offsetTop - boardSize) / pieceSize)
            );

            const currentPiece = pieces.find((p) =>
                samePosition(p.position, grabPosition)
            );

            if (currentPiece) {
                var succes = playMove(currentPiece, new Position(x, y));

                if (!succes) {
                    //RESETS THE PIECE POSITION
                    activePiece.style.position = "relative";
                    activePiece.style.removeProperty("top");
                    activePiece.style.removeProperty("left");
                }
            }
            setActivePiece(null);
        }
    }
    
    
    // Creating Board
    for (let j = VERTICAL_AXIS.length - 1; j >= 0; j--) {
        for (let i = 0; i < HORIZONTAL_AXIS.length; i++) {
            const number = j + i + 2;
            const piece = pieces.find((p) =>
                samePosition(p.position, new Position(i, j))
            );
            let image = piece ? piece.image : undefined;

            let currentPiece = activePiece != null ? pieces.find(p => samePosition(p.position, grabPosition)) : undefined;
            let highlight = currentPiece?.possibleMoves ?
                currentPiece.possibleMoves.some(p => samePosition(p, new Position(i, j))) : false;

            board.push(<Tile key={`${j},${i}`} image={image} number={number} highlight={highlight} />);
        }
    }
    return(
        <>
            
            <div className="chessBoard"
            onMouseMove={(e) => movePieceMouse(e)}
            onMouseDown={(e) => grabPieceMouse(e)}
            onMouseUp={(e) => dropPieceMouse(e)}
            ref={chessBoardRef}
            >
                {board}
            </div>
        </>
        
    )
}

