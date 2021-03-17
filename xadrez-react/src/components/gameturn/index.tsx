import React, { useState } from "react";

import { GameInfo, TituloTurno, PlayerTurnoBox } from './styles'

import Button from '@material-ui/core/Button';

const GameTurn: React.FC<{ turn: any}> = (turn) => {

    const [state, setState] = useState({ backgroundColor: turn.turn }) //add const

    const boxClick = () => {
      const newColor = state.backgroundColor === 'black' ? 'white' : 'black';
      setState({
        backgroundColor: newColor
      });
    }

    return (
      <GameInfo>
        <PlayerTurnoBox style={{ backgroundColor: state.backgroundColor }} />
        <TituloTurno>Turno</TituloTurno>
        <Button variant="outlined" onClick={boxClick}>Passar a vez</Button>  
      </GameInfo>
    );
  };
  
export default GameTurn;
