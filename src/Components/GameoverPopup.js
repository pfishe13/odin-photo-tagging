import React, { useState } from 'react';
import Timer from './Timer';
import Leaderboard from './Leaderboard';

const GameoverPopup = ({ timer, addToLeaderboard }) => {
  const [userName, setUserName] = useState('');
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = (e) => {
    addToLeaderboard(userName);
    e.preventDefault();

    setUserName('');
    toggleLeaderboard();
  };

  const toggleLeaderboard = () => {
    setShowLeaderboard(!showLeaderboard);
  };

  return (
    <div className="instructions-gameover-popup">
      <h2>GAME OVER</h2>
      <h2>
        Final time <Timer timer={timer} />
      </h2>
      {showLeaderboard ? (
        <Leaderboard />
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={userName}
              onChange={handleChange}
            />
          </label>
          <button className="submit-name-button" type="submit" value="submit">
            <span className="material-symbols-outlined">check_circle</span>
          </button>
        </form>
      )}
      <span style={{ textDecoration: 'underline' }} onClick={toggleLeaderboard}>
        {showLeaderboard ? 'Hide Leaderboard' : 'Show Leaderboard'}
      </span>
      <button onClick={(e) => window.location.reload()}>Play Again!</button>
    </div>
  );
};

export default GameoverPopup;
