import React from 'react';
import CharacterPictures from './CharacterPictures';

const InstructionsPopup = ({ characters, startGame }) => {
  return (
    <div className="instructions-gameover-popup">
      <h2>Find these 5 characters</h2>
      <CharacterPictures characters={characters} />
      <button className="button-19" onClick={startGame}>
        Start
      </button>
    </div>
  );
};

export default InstructionsPopup;
