import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Layout from '../components/layout';
import GameMenu from '../pages/MenuOpcoes';
import NaoEncontrado from '../pages/NaoEncontrado';

const AppRoutes: React.FC = () => (
        <Switch>
            <Route path='/' exact component={GameMenu} />
            <Route path="/play" exact component={Layout} />

            <Route path='*' component={NaoEncontrado} />
        </Switch>
);

export default AppRoutes;