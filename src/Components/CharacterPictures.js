import React from 'react';

const CharacterPictures = ({ characters }) => {
  return (
    <div>
      {characters.map((char) => {
        if (!char.found) {
          return (
            <img
              key={char.name}
              className="character-picture"
              alt={char.name}
              src={char.src}
            ></img>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default CharacterPictures;
