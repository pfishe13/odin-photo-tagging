import React, { useState } from 'react';
import Timer from './Timer';
const GameoverPopup = ({ timer, addToLeaderboard }) => {
  const [userName, setUserName] = useState();
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setUserName(e.target.value);
    console.log(userName);
  };

  const handleSubmit = (e) => {
    addToLeaderboard(userName);
    e.preventDefault();

    setUserName('');
    setSubmitted(true);
  };

  return (
    <div className="instructions-popup">
      <h2>GAME OVER</h2>
      <h4>
        Final time <Timer timer={timer} />
      </h4>
      {submitted ? null : (
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
      {/* <button>Start</button> */}
    </div>
  );
};

export default GameoverPopup;
