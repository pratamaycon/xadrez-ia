import React from 'react';
import GlobalStyles from  './styles/GlobalStyles'

import Game from './components/game/index'

const App: React.FC = () => {
    return(
        <>
            <GlobalStyles />
            <Game />,
        </>
    );
}

export default App;