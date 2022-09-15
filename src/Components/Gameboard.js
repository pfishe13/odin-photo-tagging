import React, { useEffect, useRef, useState } from 'react';
import MainPicture from './images/disney-wheres-waldo.jpeg';
import CharacterOptions from './CharacterOptions';

const Gameboard = ({
  timer,
  setTimer,
  gameStarted,
  gameOver,
  characters,
  setCharacters,
  changeClickedCharacter,
  changeClickedCoords,
}) => {
  const [clickedCircle, setClickedCircle] = useState();
  const [characterOptions, setCharacterOptions] = useState();

  const perryRef = useRef();
  const goofyRef = useRef();
  const rufusRef = useRef();
  const kitbullRef = useRef();
  const miguelRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setPositions();
    }, 500);
  }, []);

  useEffect(() => {
    let interval = null;
    if (gameStarted) {
      interval = setInterval(() => {
        setTimer((timer) => timer + 100);
      }, 100);
    }
    if (gameOver) {
      clearInterval(interval);
      setClickedCircle(null);
      setCharacterOptions(null);
    }
    return () => clearInterval(interval);
  }, [gameOver, gameStarted, setTimer]);

  useEffect(() => {
    window.addEventListener('resize', setPositions);

    return window.removeEventListener('resize', setPositions);
  }, []);

  const setPositions = () => {
    const xPerry = perryRef.current.offsetLeft;
    const yPerry = perryRef.current.offsetTop;

    const xGoofy = goofyRef.current.offsetLeft;
    const yGoofy = goofyRef.current.offsetTop;

    const xRufus = rufusRef.current.offsetLeft;
    const yRufus = rufusRef.current.offsetTop;

    const xKitbull = kitbullRef.current.offsetLeft;
    const yKitbull = kitbullRef.current.offsetTop;

    const xMiguel = miguelRef.current.offsetLeft;
    const yMiguel = miguelRef.current.offsetTop;

    let newCharacterState = [
      { ...characters[0], xCoord: xPerry, yCoord: yPerry },
      { ...characters[1], xCoord: xGoofy, yCoord: yGoofy },
      { ...characters[2], xCoord: xRufus, yCoord: yRufus },
      { ...characters[3], xCoord: xKitbull, yCoord: yKitbull },
      { ...characters[4], xCoord: xMiguel, yCoord: yMiguel },
    ];

    setCharacters([...newCharacterState]);
  };

  const getClickCoords = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;

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
      <div ref={perryRef} className="character perry"></div>
      <div ref={goofyRef} className="character goofy"></div>
      <div ref={rufusRef} className="character rufus"></div>
      <div ref={kitbullRef} className="character kitbull"></div>
      <div ref={miguelRef} className="character miguel"></div>

      <img
        className="main-picture"
        alt="main gameboard"
        src={MainPicture}
      ></img>
    </div>
  );
};

export default Gameboard;
