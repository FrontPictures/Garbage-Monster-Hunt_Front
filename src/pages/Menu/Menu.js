import React from 'react';
import axios from 'axios';
import Bounce from 'react-reveal/Bounce';

const Menu = () => {
    const handleOnStart = () => {

    };
    const handleOnRestart = () => {

    };
    const handleOnStop = () => {

    };
    return (
      <div className="center">
        <Bounce cascade>
          <div className="menu">
            <button type="button" onClick={handleOnStart} className="menu-item">Start game</button>
            <button type="button" onClick={handleOnRestart} className="menu-item">Restart</button>
            <button type="button" onClick={handleOnStop} className="menu-item">Stop</button>
          </div>
        </Bounce>
      </div>
);
};
export default Menu;
