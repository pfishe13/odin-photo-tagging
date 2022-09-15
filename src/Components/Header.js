import React from 'react';
import Timer from './Timer';
import CharacterPictures from './CharacterPictures';

const Header = ({ characters, timer }) => {
  return (
    <header>
      <h2>Header</h2>
      <CharacterPictures characters={characters} />
      <Timer timer={timer} />
    </header>
  );
};

export default Header;
