import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: orange;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: orange;

    
  &:hover {
    background: #7a0000;
    color: white;
    -webkit-transform: rotate(-1deg);
    transform: rotate(-2deg);
    transition: 0.8s;
  }
`;


export const AllTheThings = styled.div`
  width: 0px;
  height: 0px;

  border-left: 300px solid transparent;
  border-right: 300px solid transparent;
  border-top: 300px solid transparent;
  border-radius: px;
  position: relative;
  margin: auto;
  top: 5px;
  left: 2px;
`;

export const SinglePlayer = styled.div`
  position: relative;
  bottom: 330px;
  right: 300px;
  height: 50px;
  width: 600px;
  background: #006680;
  text-align: center;
  font-size: 30px;
  background-size: 1px 300%;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  font-family: shadows into light;
  margin: 30px 0;

  cursor: pointer;

  &:hover {
    background: #7a0000;
    color: white;
    -webkit-transform: rotate(-1deg);
    transform: rotate(-2deg);
  }
`;

export const Multiplayer = styled.div`
  height: 50px;
  width: 500px;
  background: #006680;
  position: relative;
  bottom: 345px;
  right: 240px;
  text-align: center;
  font-size: 30px;
  font-family: shadows into light;
  color: orange;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  cursor: pointer;
  margin: 30px 0;

  &:hover {
    background: #7a0000;
    color: white;

    -webkit-transform: rotate(-2deg);
    transform: rotate(-2deg);

  }
`;

export const Options = styled.div`
  height: 50px;
  width: 400px;
  background: #006680;
  position: relative;
  bottom: 360px;
  right: 200px;
  font-size: 30px;
  text-align: center;
  font-family: shadows into light;
  color: orange;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  cursor: pointer;
  margin: 30px 0;

  &:hover {
    background: #7a0000;
    color: white;
    -webkit-transform: rotate(-2deg);
    transform: rotate(-2deg);
  }
`;

export const Credits = styled.div`
  height: 50px;
  width: 300px;
  position: relative;
  background: #006680;
  bottom: 375px;
  font-size: 30px;
  right: 150px;
  text-align: center;
  font-family: shadows into light;
  color: orange;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  cursor: pointer;
  margin: 30px 0;

  &:hover {
    background: #7a0000;
    color: white;
    -webkit-transform: rotate(-2deg);
    transform: rotate(-2deg);
  }
`;
