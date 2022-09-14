import React, { useEffect, useState } from 'react';
import Header from './Header';
import Gameboard from './Gameboard';
import InstructionsPopup from './InstructionsPopup';
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

  const startGame = () => {
    setGameStarted(true);
  };

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
        Math.abs(characterElement.xCoord - clickedCoords.xCoord) < 100 &&
        Math.abs(characterElement.yCoord - clickedCoords.yCoord) < 100
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
      setGameOver((gameOver) => !gameOver);
      //   console.log('Set game over value', gameOver);
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
      {gameStarted ? (
        <Gameboard
          timer={timer}
          setTimer={setTimer}
          gameStarted={gameStarted}
          gameOver={gameOver}
          characters={characters}
          setCharacters={setCharacters}
          changeClickedCharacter={changeClickedCharacter}
          changeClickedCoords={changeClickedCoords}
        />
      ) : (
        <InstructionsPopup startGame={startGame} />
      )}
      {gameOver ? <GameoverPopup timer={timer} /> : null}
    </div>
  );
};

export default Game;
