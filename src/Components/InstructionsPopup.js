import React from 'react';
import CharacterPictures from './CharacterPictures';

const InstructionsPopup = ({ characters, startGame }) => {
  return (
    <div className="instructions-popup">
      <div>
        <h2>Instructions</h2>
        <h3>Find these 5 characters</h3>
      </div>
      <CharacterPictures characters={characters} />
      <button onClick={startGame}>Start</button>
    </div>
  );
};

export default InstructionsPopup;
