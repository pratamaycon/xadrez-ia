import React from 'react';

import { Container, AllTheThings, Options, Credits, SinglePlayer, Multiplayer, StyledLink } from './styles';

const GameMenu: React.FC = () => {

    return(
        <Container>
            <AllTheThings>
                <SinglePlayer>
                    <StyledLink to='/play?modo=0'>Jogador vs Jogador</StyledLink>
                </SinglePlayer>
                <Multiplayer>
                    <StyledLink to='/play?modo=1'>Jogador vs IA</StyledLink>
                </Multiplayer>
                <Options>
                    <StyledLink to='/play?modo=2'>IA vs IA</StyledLink>
                </Options>
                <Credits>
                    <StyledLink to='/layout'>Credits</StyledLink>
                </Credits>   
            </AllTheThings>
        </Container>
    );
};
  
export default GameMenu;