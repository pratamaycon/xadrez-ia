import React, { useState } from 'react';

import initialiseChessBoard from '../../helpers/boardInitialiser';
import Board from '../board';
import GameTurn from '../gameturn';

import { GameContainer } from './styles';

const Game: React.FC = () => {

  const [state] = useState({
    squares: initialiseChessBoard(),
    status: '',
    turn: 'White',
  });

  return (
    <GameContainer>
      <Board squares={state.squares} />
      <GameTurn turn={state.turn} />
    </GameContainer>
  );
};

export default Game;
