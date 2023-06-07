import React, { useRef, useEffect, useState } from 'react';
import '../styles/ChessBoard.css';
import Tile from './Tile.tsx';
import Referee from './referee/Referee.ts';
import { 
    VERTICAL_AXIS, 
    HORIZONTAL_AXIS, 
    Piece,
    PieceType,
    TeamType,
    initialBoardState,
    Position, 
    samePosition

} from "../helpers/Constants.ts";



export default function ChessBoard() {
    const [activePiece, setActivePiece] = useState<HTMLElement | null>(null);
    const [grabPosition, setGrabPosition] = useState<Position>({ x: -1, y: -1 });
    const [pieces, setPieces] = useState<Piece[]>(initialBoardState);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [pieceSize, setPieceSize] = useState(35);
    const [boardSize, setBoardSize] = useState(280);
    const chessBoardRef = useRef<HTMLDivElement>(null);
    const referee = new Referee();

    
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
            setGrabPosition({ x: grabX, y: grabY });
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

            const currentPiece = pieces.find((p) => samePosition(p.position, grabPosition));

        if (currentPiece) {
            const validMove = referee.isValidMove(
            grabPosition,
            { x, y },
            currentPiece.type,
            currentPiece.team,
            pieces
            );

            const isEnPassantMove = referee.isEnPassantMove(
            grabPosition,
            { x, y },
            currentPiece.type,
            currentPiece.team,
            pieces
            );

            const pawnDirection = currentPiece.team === TeamType.OUR ? 1 : -1;

            if (isEnPassantMove) {
            const updatedPieces = pieces.reduce((results, piece) => {
                if (samePosition(piece.position, grabPosition)) {
                piece.enPassant = false;
                piece.position.x = x;
                piece.position.y = y;
                results.push(piece);
                } else if (
                !samePosition(piece.position, { x, y: y - pawnDirection })
                ) {
                if (piece.type === PieceType.PAWN) {
                    piece.enPassant = false;
                }
                results.push(piece);
                }

                return results;
            }, [] as Piece[]);

            setPieces(updatedPieces);
            } else if (validMove) {
            //UPDATES THE PIECE POSITION
            //AND IF A PIECE IS ATTACKED, REMOVES IT
            const updatedPieces = pieces.reduce((results, piece) => {
                if (samePosition(piece.position, grabPosition)) {
                //SPECIAL MOVE
                piece.enPassant =
                    Math.abs(grabPosition.y - y) === 2 &&
                    piece.type === PieceType.PAWN;
                    
                piece.position.x = x;
                piece.position.y = y;
                results.push(piece);
                } else if (!samePosition(piece.position, { x, y })) {
                if (piece.type === PieceType.PAWN) {
                    piece.enPassant = false;
                }
                results.push(piece);
                }

                return results;
            }, [] as Piece[]);

            setPieces(updatedPieces);
            } else {
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
            const piece = pieces.find((p) => samePosition(p.position, {x: i, y: j}))
            let image = piece ? piece.image : undefined;
            board.push(<Tile key={`${j},${i}`} image={image} number={number} />);
        }
    }
    return(
        <div className="chessBoard"
        onMouseMove={(e) => movePieceMouse(e)}
        onMouseDown={(e) => grabPieceMouse(e)}
        onMouseUp={(e) => dropPieceMouse(e)}
        ref={chessBoardRef}
        >
            {board}
        </div>
    )
}

