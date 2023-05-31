import React, { useRef, useEffect, useState } from 'react';
import '../styles/ChessBoard.css';
import Tile from './Tile.tsx';


const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];


interface Piece {
    image: string,
    x: number,
    y: number
}

const initialBoardState: Piece[] = [];

// Black & White Piece Spawns
for (let p = 0; p < 2; p++) {
    const type = p === 0 ? "b" : "w";
    const y = p === 0 ? 7 : 0;

    initialBoardState.push({ image: `assets/images/rook_${type}.png`, x: 0, y });
    initialBoardState.push({ image: `assets/images/rook_${type}.png`, x: 7, y });
    initialBoardState.push({ image: `assets/images/knight_${type}.png`, x: 1, y });
    initialBoardState.push({ image: `assets/images/knight_${type}.png`, x: 6, y });
    initialBoardState.push({ image: `assets/images/bishop_${type}.png`, x: 2, y });
    initialBoardState.push({ image: `assets/images/bishop_${type}.png`, x: 5, y });
    initialBoardState.push({ image: `assets/images/queen_${type}.png`, x: 3, y });
    initialBoardState.push({ image: `assets/images/king_${type}.png`, x: 4, y });
}
// Black Pawn Spawn
for (let i = 0; i < 8; i++) {
    initialBoardState.push({ image: "assets/images/pawn_b.png", x: i, y: 6 });
}
// White Pawn Spawn
for (let i = 0; i < 8; i++) {
    initialBoardState.push({ image: "assets/images/pawn_w.png", x: i, y: 1 });
}



export default function ChessBoard() {
    const [activePiece, setActivePiece] = useState<HTMLElement | null>(null);
    const [gridX, setGridX] = useState(0);
    const [gridY, setGridY] = useState(0);
    const [pieces, setPieces] = useState<Piece[]>(initialBoardState);
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
            
            setGridX(Math.floor((e.clientX - chessBoard.offsetLeft) / pieceSize));
            setGridY(Math.abs(Math.ceil((e.clientY - chessBoard.offsetTop - boardSize) / pieceSize)));
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
            const y = Math.abs(Math.ceil((e.clientY - chessBoard.offsetTop - boardSize) / pieceSize));

            setPieces((value) => {
                const pieces = value.map((p) => {
                    if(p.x === gridX && p.y === gridY) {
                        p.x = x;
                        p.y = y
                    }
                    return p;
                });
                return pieces
            });
            setActivePiece(null);
        }
    }
    // Touch Events
    function grabPieceTouch(e: React.TouchEvent) {
        const element = e.target as HTMLElement;
        const chessBoard = chessBoardRef.current;
        const touches = e.touches[0]
        if(element.classList.contains("chessPiece") && chessBoard){
            
            setGridX(Math.floor((touches.pageX - chessBoard.offsetLeft) / pieceSize));
            setGridY(Math.abs(Math.ceil((touches.pageY - chessBoard.offsetTop - boardSize) / pieceSize)));
            const x = touches.pageX - Math.abs(Math.ceil(pieceSize / 2));
            const y = touches.pageY - Math.abs(Math.ceil(pieceSize / 2));
            element.style.position = "absolute";
            element.style.left = `${x}px`;
            element.style.top = `${y}px`;

            setActivePiece(element)
        }
    }
    function movePieceTouch(e: React.TouchEvent) {
        const chessBoard = chessBoardRef.current;
        const touches = e.touches[0]
        if (activePiece && chessBoard) {
            const minX = chessBoard.offsetLeft - Math.abs(Math.ceil(pieceSize / 4));
            const minY = chessBoard.offsetTop - Math.abs(Math.ceil(pieceSize / 4));
            const maxX = chessBoard.offsetLeft + chessBoard.clientWidth - Math.abs(Math.ceil(pieceSize / 4) * 3);
            const maxY = chessBoard.offsetTop + chessBoard.clientHeight - Math.abs(Math.ceil(pieceSize / 4) * 3);
            const x = touches.pageX - Math.abs(Math.ceil(pieceSize / 2));
            const y = touches.pageY - Math.abs(Math.ceil(pieceSize / 2));
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
    function dropPieceTouch(e: React.TouchEvent ) {
        const chessBoard = chessBoardRef.current;
        const touches = e.touches[0]
        if(activePiece && chessBoard){
            const x = Math.floor((touches.pageX - chessBoard.offsetLeft) / pieceSize);
            const y = Math.abs(Math.ceil((touches.pageY - chessBoard.offsetTop - boardSize) / pieceSize));

            setPieces((value) => {
                const pieces = value.map((p) => {
                    if(p.x === gridX && p.y === gridY) {
                        p.x = x;
                        p.y = y
                    }
                    return p;
                });
                return pieces
            });
            setActivePiece(null);
        }
    }
    // Creating Board
    for (let j = verticalAxis.length - 1; j >= 0; j--) {
        for (let i = 0; i < horizontalAxis.length; i++) {
            const number = j + i + 2;
            let image = undefined;

            pieces.forEach((p) => {
            if (p.x === i && p.y === j) {
                image = p.image;
            }
            });

            board.push(<Tile key={`${j},${i}`} image={image} number={number} />);
        }
    }
    return(
        <div className="chessBoard"
        onMouseMove={(e) => movePieceMouse(e)}
        onMouseDown={(e) => grabPieceMouse(e)}
        onMouseUp={(e) => dropPieceMouse(e)}

        onTouchStart={(e) => grabPieceTouch(e)}
        onTouchMove={(e) => movePieceTouch(e)}
        onTouchEnd={(e) => dropPieceTouch(e)}
        ref={chessBoardRef}
        >
            {board}
        </div>
    )
}

