import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Gameboard from './Gameboard';
import InstructionsPopup from './InstructionsPopup';
import { useRef } from 'react';

const Game = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [timer, setTimer] = useState(0);
  const [characters, setCharacters] = useState([
    { name: 'perry', found: false, xCoord: 0, yCoord: 0 },
    { name: 'goofy', found: false, xCoord: 0, yCoord: 0 },
  ]);

  const perryRef = useRef();
  const goofyRef = useRef();

  useEffect(() => {
    console.log('Initial position setting');
    setPositions();
  }, [gameStarted]);

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

    console.log('New state', newCharacterState);

    setCharacters([...newCharacterState]);
  };

  const registerClick = (event) => {
    console.log(characters);
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    console.log('Clicked x coord', x);
    console.log('Clicked y coord', y);

    // isClickAccurate('perry', x, y);
  };

  const startGame = () => {
    setGameStarted(true);
    startTimer();
  };

  const startTimer = () => {
    let interval = setInterval(() => {
      setTimer((time) => time + 100);
    }, 100);
  };

  const showClickCircle = () => {};

  return (
    <div>
      <Header timer={timer} />
      {gameStarted ? null : <InstructionsPopup startGame={startGame} />}
      <Gameboard
        perryRef={perryRef}
        goofyRef={goofyRef}
        registerClick={registerClick}
        showClickCircle={showClickCircle}
        characters={characters}
      />
      <Footer />
    </div>
  );
};

export default Game;
