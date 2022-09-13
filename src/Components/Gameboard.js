import React from 'react';
import MainPicture from './images/disney-wheres-waldo.jpeg';

const Gameboard = () => {
  return (
    <div>
      <img
        className="main-picture"
        alt="main gameboard"
        src={MainPicture}
      ></img>
    </div>
  );
};

export default Gameboard;
