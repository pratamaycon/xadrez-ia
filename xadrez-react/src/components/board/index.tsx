
import React from "react";

import Square from '../square';

const Board: React.FC<{ squares: any}> = (squares) => {

  const isEven = (num: number) => {
        return num % 2 === 0;
  }

   const renderSquare = (i: number, squareShade: any) => {
        return <Square
          style={squares.squares[i] ? squares.squares[i].style : null}
          shade={squareShade}
        />
  }

  const render = () => {
    const board = [];
    for (let i = 0; i < 8; i++) {
      const squareRows = [];
      for (let j = 0; j < 8; j++) {
        const squareShade = (isEven(i) && isEven(j)) || (!isEven(i) && !isEven(j)) ? "light-square" : "dark-square";
        squareRows.push(renderSquare((i * 8) + j, squareShade));
      }
      board.push(<div className="board-row" key={i}>{squareRows}</div>)
    }
    return board;
  }

  return (
    <div>
      {render()}
    </div>
  );

}

export default Board;