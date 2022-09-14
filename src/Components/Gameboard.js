import React, { useEffect, useRef, useState } from 'react';
import MainPicture from './images/disney-wheres-waldo.jpeg';
import CharacterOptions from './CharacterOptions';

const Gameboard = ({
  perryRef,
  goofyRef,
  characters,
  changeClickedCharacter,
  changeClickedCoords,
}) => {
  const [clickedCircle, setClickedCircle] = useState();
  const [characterOptions, setCharacterOptions] = useState();

  const getClickCoords = (event) => {
    // console.log(characters);
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    // console.log('Clicked x coord', x);
    // console.log('Clicked y coord', y);
    return [x, y];
  };

  const userBoardClick = (e) => {
    let [x, y] = getClickCoords(e);

    showClickedCircle(x, y);
    changeClickedCoords(x, y);

    showCharacterOptions(x, y);
  };

  const showClickedCircle = (x, y) => {
    let newCircle = (
      <svg>
        <circle
          cx={x}
          cy={y}
          r="30"
          stroke="black"
          strokeWidth="3"
          fill="transparent"
        />
      </svg>
    );

    setClickedCircle(newCircle);
  };

  const showCharacterOptions = (x, y) => {
    setCharacterOptions(
      <CharacterOptions
        x={x}
        y={y}
        characters={characters}
        changeClickedCharacter={changeClickedCharacter}
      />
    );
  };

  return (
    <div className="gameboard" onClick={userBoardClick}>
      {clickedCircle ? clickedCircle : null}
      {characterOptions ? characterOptions : null}
      <img
        className="main-picture"
        alt="main gameboard"
        src={MainPicture}
      ></img>
      <div ref={perryRef} className="perry"></div>
      <div ref={goofyRef} className="goofy"></div>
    </div>
  );
};

export default Gameboard;
