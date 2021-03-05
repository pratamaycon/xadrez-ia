import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


const Title: React.FC = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <div className="titulo">Xadrez</div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Title;
