import React from 'react';
import GlobalStyles from  './styles/GlobalStyles'

import Game from './components/game/index'
import Title from './components/title/index'

const App: React.FC = () => {
    return(
        <>
            <GlobalStyles />
            <Title />
            <Game />,
        </>
    );
}

export default App;