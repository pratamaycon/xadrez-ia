import React from 'react';

import { Container, Titulo, SubTitulo } from './styles';

const NaoEncontrado: React.FC = () => (
  <Container>
      <div>
      <Titulo>Essa página não está disponível.</Titulo>
      <SubTitulo>
        O link que você acessou pode estar quebrado ou a página pode ter sido
        removida.
      </SubTitulo>
      </div>
  </Container>
);

export default NaoEncontrado;
