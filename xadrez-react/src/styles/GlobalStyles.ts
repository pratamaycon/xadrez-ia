import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html, body {
      height: 100%;
    }
    
    body {
        font: 14px 'Century Gothic', Futura, sans-serif;
        background-color: gray;
        margin: 0;
    }

    ol,
    ul {
      padding-left: 30px;
    }

    .board-row:after {
      clear: both;
      content: '';
      display: table;
    }

    .status {
      margin-bottom: 10px;
    }

    .MuiToolbar-regular {
      color: black;
      background: white;
      padding: 0;
    }

    .game {
      height: calc(100vh - 48px - 64px);
      padding: 0;
      margin: 0;
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .titulo {
      width: 100%;  
      max-height: 64px;
      text-align: center;
      font-size: 3rem;
      font-family: 'Akaya Kanadaka', cursive;
      font-family: 'DotGothic16', sans-serif;
      font-family: 'Flavors', cursive;
      font-style: normal;
      font-weight: 400;
    }

    .game-board {

    }

    .square {
      background: transparent;
      border: 1px solid transparent;
      float: left;
      font-size: 24px;
      font-weight: bold;
      line-height: 34px;
      height: 48px;
      margin-right: -1px;
      margin-top: -1px;
      padding: 0;
      text-align: center;
      width: 48px;
    }

    .square:focus {
      outline: none;
    }

    .kbd-navigation .square:focus {
      background: #ddd;
    }

    .game-info {
      margin-left: 20px;
    }

    .icons-attribution,
    .game-status,
    .fallen-soldier-block {
      margin-top: 20px;
      min-height: 50px;
    }

    .dark-square {
      background-color: RGB(187, 190, 100);
      background-repeat: no-repeat;
    }

    .light-square {
      background-color: RGB(234, 240, 206);
      background-repeat: no-repeat;
    }

    #player-turn-box {
      width: 32px;
      height: 32px;
      border: 1px solid #000;
      margin-bottom: 10px;
    }

    h3 {
      margin-bottom: 5px;
    }
`;
