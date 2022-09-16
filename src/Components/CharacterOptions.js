import React from 'react';

const CharacterOptions = ({ x, y, characters, changeClickedCharacter }) => {
  const position = {
    top: y - 30,
    left: x + 38,
  };
  return (
    <div style={position} className="character-dropdown">
      {characters.map((char) => {
        if (!char.found) {
          return (
            <img
              key={char.name}
              className="character-picture"
              alt={char.name}
              src={char.src}
              onClick={(e) => {
                changeClickedCharacter(char.name);
              }}
            ></img>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default CharacterOptions;
