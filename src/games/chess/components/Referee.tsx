import React, {  useRef, useState } from "react";
import { initialBoard } from "../helpers/Constants.ts";
import { Piece } from "../models/Piece.ts";
import { Position } from "../models/Position.ts";
import Chessboard from "./ChessBoard.tsx";
import { Pawn } from "../models/Pawn.ts";
import { Board } from "../models/Board.ts";
import { bishopMove, getPossibleBishopMoves } from "../helpers/referee/BishopRules.ts";
import { pawnMove, getPossiblePawnMoves } from "../helpers/referee/PawnRules.ts";
import { knightMove, getPossibleKnightMoves } from "../helpers/referee/KnightRules.ts";
import { queenMove, getPossibleQueenMoves } from "../helpers/referee/QueenRules.ts";
import { kingMove, getPossibleKingMoves } from "../helpers/referee/KingRules.ts";
import { rookMove, getPossibleRookMoves } from "../helpers/referee/RookRules.ts";
import { PieceType, TeamType } from "../helpers/Types.ts";

export default function Referee() {
    const [board, setBoard] = useState<Board>(initialBoard.clone());
    const [promotionPawn, setPromotionPawn] = useState<Piece>();
    const modalRef = useRef<HTMLDivElement>(null);
    const checkmateModalRef = useRef<HTMLDivElement>(null);
    

    

    function playMove(playedPiece: Piece, destination: Position): boolean {
        // If the playing piece doesn't have any moves return
        if (playedPiece.possibleMoves === undefined) return false;

        // Prevent the inactive team from playing
        if (playedPiece.team === TeamType.OUR
            && board.totalTurns % 2 !== 1) return false;
        if (playedPiece.team === TeamType.OPPONENT
            && board.totalTurns % 2 !== 0) return false;

        let playedMoveIsValid = false;

        const validMove = playedPiece.possibleMoves?.some(m => m.samePosition(destination));

        if (!validMove) return false;

        const enPassantMove = isEnPassantMove(
            playedPiece.position,
            destination,
            playedPiece.type,
            playedPiece.team
        );

        // playMove modifies the board thus we
        // need to call setBoard
        setBoard(() => {
            const clonedBoard = board.clone();
            clonedBoard.totalTurns += 1;
            // Playing the move
            playedMoveIsValid = clonedBoard.playMove(enPassantMove,
                validMove, playedPiece,
                destination);

            if(clonedBoard.winningTeam !== undefined) {
                checkmateModalRef.current?.classList.remove("hidden")
            }

            return clonedBoard;
        })

        // This is for promoting a pawn
        let promotionRow = (playedPiece.team === TeamType.OUR) ? 7 : 0;

        if (destination.y === promotionRow && playedPiece.isPawn) {
            modalRef.current?.classList.remove("hidden");
            setPromotionPawn((previousPromotionPawn) => {
                const clonedPlayedPiece = playedPiece.clone();
                clonedPlayedPiece.position = destination.clone();
                return clonedPlayedPiece;
            });
        }

        return playedMoveIsValid;
    }

    function isEnPassantMove(
        initialPosition: Position,
        desiredPosition: Position,
        type: PieceType,
        team: TeamType
    ) {
        const pawnDirection = team === TeamType.OUR ? 1 : -1;

        if (type === PieceType.PAWN) {
            if (
                (desiredPosition.x - initialPosition.x === -1 ||
                    desiredPosition.x - initialPosition.x === 1) &&
                desiredPosition.y - initialPosition.y === pawnDirection
            ) {
                const piece = board.pieces.find(
                    (p) =>
                        p.position.x === desiredPosition.x &&
                        p.position.y === desiredPosition.y - pawnDirection &&
                        p.isPawn &&
                        (p as Pawn).enPassant
                );
                console.log(piece)
                if (piece) {
                    return true;
                }
            }
        }

        return false;
    }

    //TODO
    //Add stalemate!

    function isValidMove(initialPosition: Position, desiredPosition: Position, type: PieceType, team: TeamType) {
        let validMove = false;
        switch (type) {
            case PieceType.PAWN:
                validMove = pawnMove(initialPosition, desiredPosition, team, board.pieces);
                break;
            case PieceType.KNIGHT:
                validMove = knightMove(initialPosition, desiredPosition, team, board.pieces);
                break;
            case PieceType.BISHOP:
                validMove = bishopMove(initialPosition, desiredPosition, team, board.pieces);
                break;
            case PieceType.ROOK:
                validMove = rookMove(initialPosition, desiredPosition, team, board.pieces);
                break;
            case PieceType.QUEEN:
                validMove = queenMove(initialPosition, desiredPosition, team, board.pieces);
                break;
            case PieceType.KING:
                validMove = kingMove(initialPosition, desiredPosition, team, board.pieces);
        }

        return validMove;
    }

    function promotePawn(pieceType: PieceType) {
        if (promotionPawn === undefined) {
            return;
        }

        setBoard((previousBoard) => {
            const clonedBoard = board.clone();
            clonedBoard.pieces = clonedBoard.pieces.reduce((results, piece) => {
                if (piece.samePiecePosition(promotionPawn)) {
                    results.push(new Piece(piece.position.clone(), pieceType,
                        piece.team, true));
                } else {
                    results.push(piece);
                }
                return results;
            }, [] as Piece[]);

            clonedBoard.calculateAllMoves();

            return clonedBoard;
        })

        modalRef.current?.classList.add("hidden");
    }

    function promotionTeamType() {
        return (promotionPawn?.team === TeamType.OUR) ? "w" : "b";
    }

    function restartGame() {
        checkmateModalRef.current?.classList.add("hidden");
        setBoard(initialBoard.clone());
    }

    return(
        <>
            <p className="chessTotalTurns">Total Turns: {board.totalTurns}</p>
            <div className="chessModal hidden"  ref={modalRef}>
                <div className="chessModalBody">
                    <img src={`/assets/images/rook_${promotionTeamType()}.png`} onClick={() => promotePawn(PieceType.ROOK)} className='chessModalIcon' />
                    <img src={`/assets/images/bishop_${promotionTeamType()}.png`} onClick={() => promotePawn(PieceType.BISHOP)} className='chessModalIcon' />
                    <img src={`/assets/images/knight_${promotionTeamType()}.png`} onClick={() => promotePawn(PieceType.KNIGHT)} className='chessModalIcon' />
                    <img src={`/assets/images/queen_${promotionTeamType()}.png`} onClick={() => promotePawn(PieceType.QUEEN)} className='chessModalIcon' />
                </div>
            </div>
            <div className="chessModal hidden" ref={checkmateModalRef}>
                <div className="chessCheckmateBody">
                    <h1 className="chessCheckmateTitle">CHECKMATE!</h1>
                    <span className="chessCheckmateTeam">{board.winningTeam === TeamType.OUR ? "WHITE" : "BLACK"} WINS!</span>
                    <button onClick={restartGame} className="chessCheckmateBtn">Play Again!</button>
                </div>
            </div>
            
            <Chessboard playMove={playMove} pieces={board.pieces} />
        </>
    )
}