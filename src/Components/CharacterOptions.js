import React from 'react';

const CharacterOptions = ({ x, y, characters, changeClickedCharacter }) => {
  const position = {
    top: y - 40,
    left: x + 35,
  };
  return (
    <div style={position} className="character-dropdown">
      {characters.map((char, index) => {
        return (
          <div onClick={(e) => changeClickedCharacter(char.name)} key={index}>
            {char.name}
          </div>
        );
      })}
    </div>
  );
};

export default CharacterOptions;
