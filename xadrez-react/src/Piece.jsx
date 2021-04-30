import React from 'react';
import {useDrag, DragPreviewImage} from 'react-dnd';

export default function Piece({
     piece: { type, color }, position,
     }) {
    let id = `${position}_${type}_${color}`;
    const [{isDragging}, drag, preview] = useDrag({ 
        type: 'piece',
        item: () => ({ id }),
        collect: (monitor) => {
            return {isDragging: !!monitor.isDragging()}
        },
    })
    
    const pieceImg = require(`./assets/${type}_${color}.png`)  
    //console.log(pieceImg) 
    return (
        <>
        <DragPreviewImage connect={preview} src={pieceImg.default} />
        <div 
        className="piece-container" 
        ref={drag} 
        style={{opacity: isDragging ? 0 : 1}} 
        >
            <img src={pieceImg.default} alt="" className="piece" />
        </div>
        </>
    )
}