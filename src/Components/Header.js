import React from 'react';
import Timer from './Timer';

const Header = ({ timer }) => {
  return (
    <header>
      <h2>Header</h2>
      <Timer timer={timer} />
    </header>
  );
};

export default Header;
