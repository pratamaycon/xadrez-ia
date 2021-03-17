import React, { useState } from "react";

import initialiseChessBoard from '../../helpers/boardInitialiser';
import Board from '../board';
import GameTurn from '../gameturn';

const Game: React.FC = () => {
    const [state] = useState({
      squares: initialiseChessBoard(),
      status: '',
      turn: 'white'
    });

    return (
      <div>
      <div className="game">
        <div className="game-board">
        <Board squares={state.squares} />
        </div>
        <GameTurn turn={state.turn} />
      </div>
      <div>dasdasda</div>
    </div>
    );
  
}

export default Game;