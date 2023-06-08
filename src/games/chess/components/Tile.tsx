import React from "react";
import '../styles/Tile.css';

interface Props {
    image?: string;
    number: number;
    highlight: boolean;
}
export default function Tile({ number, image, highlight}: Props) {
    const className: string = [
        "chessTile", 
        number % 2 === 0 && "blackTile",
        number % 2 !== 0 && "whiteTile",
        highlight && "chessTileHighlight"
    ].filter(Boolean).join(' ');
    
    return (
        <div className={className}>
                
                {
                    image && 
                    <div style={{ backgroundImage: `url(${image})`}} className="chessPiece">
                    </div>
                }
        </div>
    )      
}