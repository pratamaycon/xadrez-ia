import React from 'react';

import { Container, AllTheThings, Options, Credits, SinglePlayer, Multiplayer, StyledLink } from './styles';

const GameMenu: React.FC = () => {

    return(
        <Container>
            <AllTheThings>
                <SinglePlayer>
                    <StyledLink to='/play'>SINGLE PLAYER</StyledLink>
                </SinglePlayer>
                <Multiplayer>
                    <StyledLink to='/play'>MULTIPLAYER</StyledLink>
                </Multiplayer>
                <Options>
                    <StyledLink to='/layout'>Options</StyledLink>
                </Options>
                <Credits>
                    <StyledLink to='/layout'>Credits</StyledLink>
                </Credits>   
            </AllTheThings>
        </Container>
    );
};
  
export default GameMenu;