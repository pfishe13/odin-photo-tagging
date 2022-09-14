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
  const imageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setPositions();
    }, 500);

    console.log('Initial position setting');
    console.log(characters);
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
  }, []);

  const setPositions = () => {
    const xPerry = perryRef.current.offsetLeft;
    console.log('Perry x coord', xPerry);
    const yPerry = perryRef.current.offsetTop;
    console.log('Perry y coord', yPerry);

    const xGoofy = goofyRef.current.offsetLeft;
    console.log('Goofy x coord', xGoofy);
    const yGoofy = goofyRef.current.offsetTop;
    console.log('Goofy y coord', yGoofy);

    // const imageX = imageRef.current.offsetLeft;
    // console.log('Image x coord', imageX);
    // const imageY = imageRef.current.offsetTop;
    // console.log('Image y coord', imageY);

    let newCharacterState = [
      {
        name: 'perry',
        found: characters[0].found,
        xCoord: xPerry,
        yCoord: yPerry,
      },
      {
        name: 'goofy',
        found: characters[1].found,
        xCoord: xGoofy,
        yCoord: yGoofy,
      },
    ];

    // console.log('New state', newCharacterState);

    setCharacters([...newCharacterState]);
  };

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

    console.log('Current character states', characters);

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
      <div ref={perryRef} className="perry"></div>
      <div ref={goofyRef} className="goofy"></div>
      <img
        ref={imageRef}
        className="main-picture"
        alt="main gameboard"
        src={MainPicture}
      ></img>
    </div>
  );
};

export default Gameboard;
