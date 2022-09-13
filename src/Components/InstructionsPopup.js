import React from 'react';

const InstructionsPopup = ({ startGame }) => {
  return (
    <div className="instructions-popup">
      <h2>Instructions</h2>
      <h3>Find these 5 characters</h3>
      <button onClick={startGame}>Start</button>
    </div>
  );
};

export default InstructionsPopup;
