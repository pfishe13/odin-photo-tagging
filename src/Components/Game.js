import React, { useEffect, useState } from 'react';
import Header from './Header';
import Gameboard from './Gameboard';
import InstructionsPopup from './InstructionsPopup';
import GameoverPopup from './GameoverPopup';
import perry from './images/perry.png';
import goofy from './images/goofy.png';
import rufus from './images/rufus.png';
import kitbull from './images/kitbull.png';
import miguel from './images/miguel.png';

const Game = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [timer, setTimer] = useState(0);
  const [characters, setCharacters] = useState([
    { name: 'perry', found: false, xCoord: 0, yCoord: 0, src: perry },
    { name: 'goofy', found: false, xCoord: 0, yCoord: 0, src: goofy },
    { name: 'rufus', found: false, xCoord: 0, yCoord: 0, src: rufus },
    { name: 'kitbull', found: false, xCoord: 0, yCoord: 0, src: kitbull },
    { name: 'miguel', found: false, xCoord: 0, yCoord: 0, src: miguel },
  ]);

  let clickedCoords;
  let clickedCharacter;

  const startGame = () => {
    setGameStarted(true);
  };

  const changeClickedCoords = (x, y) => {
    clickedCoords = { xCoord: x, yCoord: y };
  };

  const changeClickedCharacter = (characterName) => {
    clickedCharacter = characterName;
    checkCorrectMatch();
  };

  const checkCorrectMatch = () => {
    const characterElement = characters.find(
      (elem) => elem.name === clickedCharacter
    );

    if (characterElement['found'] === false) {
      if (
        Math.abs(characterElement.xCoord - clickedCoords.xCoord) < 100 &&
        Math.abs(characterElement.yCoord - clickedCoords.yCoord) < 100
      ) {
        characterElement.found = true;
      }
    }
    // console.log(
    //   `${characterElement.name} found value: ${characterElement.found}`
    // );

    checkGameOver();
  };

  const checkGameOver = () => {
    if (allCharactersFound()) {
      console.log('Game is over');
      setGameOver((gameOver) => !gameOver);
    } else {
      console.log('Game not over yet');
    }
  };

  const allCharactersFound = () => {
    return characters.every((item) => item.found === true);
  };

  const addToLeaderboard = (userName) => {
    console.log(userName);
    console.log(timer);
  };

  return (
    <div>
      <Header characters={characters} timer={timer} />
      {gameStarted && !gameOver ? (
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
        <InstructionsPopup characters={characters} startGame={startGame} />
      )}
      {gameOver ? (
        <GameoverPopup timer={timer} addToLeaderboard={addToLeaderboard} />
      ) : null}
    </div>
  );
};

export default Game;
