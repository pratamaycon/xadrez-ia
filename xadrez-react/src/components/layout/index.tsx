import React from 'react';

import GameMenu from '../game/';
import Title from '../title';

import { Container } from './styles';

const Layout: React.FC = () => (
  <Container>
    <Title />
    <GameMenu />
  </Container>
);

export default Layout;
