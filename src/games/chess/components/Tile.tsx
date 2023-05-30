import React from "react";
import '../styles/Tile.css';

interface Props {
    image?: string;
    number: number;
}
export default function Tile({ number, image}: Props) {
    if (number % 2 === 0) {
        return (
            <div className="chessTile blackTile">
                <img src={image} className="chessPieceImg"  />
            </div>
        );
    } else {
        return (
            <div className="chessTile whiteTile">
                <img src={image} className="chessPieceImg" />
            </div>
        );
    }
}