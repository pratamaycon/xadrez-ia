import React, { useState } from "react";

import initialiseChessBoard from '../../helpers/boardInitialiser';
import Board from '../board';

const Game: React.FC = () => {
    const [squares] = useState(initialiseChessBoard());

    return (
      <div>
      <div className="game">
        <div className="game-board">
        <Board squares={squares} />
        </div>
      </div>
    </div>
    );
  
}

export default Game;