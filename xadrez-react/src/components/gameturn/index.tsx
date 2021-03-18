import React, { useState } from 'react';

import { Container, ContainerIcone, ImgIcone, BotaoIcone, TituloIcone } from './styles';

import blackTurn from '../../assets/turn-black.png';
import whiteTurn from '../../assets/turn-white.png';


const GameTurn: React.FC<{ turn: any }> = (turn) => {
  const [state, setState] = useState({ name: turn.turn, image: whiteTurn }); //add const

  const onClick = () => {
    const newName = state.name === 'Black' ? 'White' : 'Black';
    const newImage = newName === 'Black'? blackTurn : whiteTurn;
    setState({
      name: newName,
      image: newImage
    });
  };

  return (
    <Container>
      <ContainerIcone>
        <BotaoIcone onClick={onClick}>
          <ImgIcone src={state.image} />
          <TituloIcone> Turn {state.name} </TituloIcone>
        </BotaoIcone>
      </ContainerIcone>
    </Container>
  );
};

export default GameTurn;
