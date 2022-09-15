import React from 'react';
import Timer from './Timer';
import CharacterPictures from './CharacterPictures';

const Header = ({ gameStarted, characters, timer }) => {
  return (
    <header>
      <h2>Where's Waldo? Disney Edition!</h2>
      {gameStarted ? <CharacterPictures characters={characters} /> : null}
      <h2 className="timer-header">
        <Timer timer={timer} />
      </h2>
    </header>
  );
};

export default Header;
