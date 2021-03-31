import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  width: 94px;
  margin-left: 20px;
`;

export const ContainerIcone = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid #d9d9de;
  margin: 0;
  background: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BotaoIcone = styled.button`
  width: 100%;
  height: 100%;
  cursor: pointer;
  background: #e0e0e0;  

  &:hover {
    background: #e0e0e0;
  }
`;

export const TituloIcone = styled.h4`
  display: block;
  top: 10px;
  margin: 10px 0;
`;

export const ImgIcone = styled.img`
  width: 30%;
  height: 30%;
  margin: 10px 0;
`;