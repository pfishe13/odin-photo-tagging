import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Gameboard from './Gameboard';
import InstructionsPopup from './InstructionsPopup';
import { useRef } from 'react';
import GameoverPopup from './GameoverPopup';

const Game = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [timer, setTimer] = useState(0);
  const [characters, setCharacters] = useState([
    { name: 'perry', found: false, xCoord: 0, yCoord: 0 },
    { name: 'goofy', found: false, xCoord: 0, yCoord: 0 },
  ]);

  let clickedCoords;
  let clickedCharacter;

  const perryRef = useRef();
  const goofyRef = useRef();

  useEffect(() => {
    // console.log('Initial position setting');
    setPositions();
  }, [gameStarted]);

  useEffect(() => {
    window.addEventListener('resize', setPositions);
  }, []);

  const setPositions = () => {
    const xPerry = perryRef.current.offsetLeft;
    // console.log('Perry x coord', xPerry);
    const yPerry = perryRef.current.offsetTop;
    // console.log('Perry y coord', yPerry);

    const xGoofy = goofyRef.current.offsetLeft;
    // console.log('Goofy x coord', xGoofy);
    const yGoofy = goofyRef.current.offsetTop;
    // console.log('Goofy y coord', yGoofy);

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

  const startGame = () => {
    setGameStarted(true);
    startTimer();
  };

  const startTimer = () => {
    let interval = setInterval(() => {
      setTimer((time) => time + 100);
    }, 100);
  };

  const stopTimer = () => {};

  const changeClickedCoords = (x, y) => {
    console.log(x, y);
    clickedCoords = { xCoord: x, yCoord: y };
    // setClickedCoords({ xCoord: x, yCoord: y });
  };

  const changeClickedCharacter = (characterName) => {
    console.log(characterName);
    clickedCharacter = characterName;
    // setClickedCharacter(characterName);
    checkCorrectMatch();
  };

  const checkCorrectMatch = () => {
    console.log(clickedCoords);
    console.log(clickedCharacter);

    const characterElement = characters.find(
      (elem) => elem.name === clickedCharacter
    );

    // console.log('Character element', characterElement);

    if (characterElement['found'] === false) {
      if (
        characterElement.xCoord - clickedCoords.xCoord < 200 &&
        characterElement.yCoord - clickedCoords.yCoord < 200
      ) {
        characterElement.found = true;
      }
    }
    console.log(
      `${characterElement.name} found value: ${characterElement.found}`
    );

    checkGameOver();
  };

  const checkGameOver = () => {
    if (allCharactersFound()) {
      console.log('Game is over');
      stopTimer();
      setGameOver(!gameOver);
    } else {
      console.log('Game not over yet');
    }
  };

  const allCharactersFound = () => {
    return characters.every((item) => item.found === true);
  };

  return (
    <div>
      <Header timer={timer} />
      {gameStarted ? null : <InstructionsPopup startGame={startGame} />}
      {gameOver ? <GameoverPopup timer={timer} /> : null}
      <Gameboard
        perryRef={perryRef}
        goofyRef={goofyRef}
        characters={characters}
        changeClickedCharacter={changeClickedCharacter}
        changeClickedCoords={changeClickedCoords}
      />
      <Footer />
    </div>
  );
};

export default Game;
