import React from 'react';

export default function Timer(props) {
  return (
    <div className="timer">
      <h2>
        <span className="digits">
          {('0' + Math.floor((props.timer / 60000) % 60)).slice(-2)}:
        </span>
        <span className="digits">
          {('0' + Math.floor((props.timer / 1000) % 60)).slice(-2)}.
        </span>
        <span className="digits mili-sec">
          {('0' + ((props.timer / 10) % 100)).slice(-2)}
        </span>
      </h2>
    </div>
  );
}
