// src/App.js
import React, { useState } from 'react';
import PhaserGame from './components/PhaserGame';
import './App.css';

function App() {
  const [direction, setDirection] = useState('');

  const handleButtonClick = (dir) => {
    setDirection(dir);
  };

  return (
    <div className="app-container">
      <div className="top-buttons">
        <button onClick={() => handleButtonClick('up-left')}>Up Left</button>
        <button onClick={() => handleButtonClick('up-right')}>Up Right</button>
      </div>
      <div className="side-container">
        <div className="side-buttons left-buttons">
          <button onClick={() => handleButtonClick('left-up')}>Left Up</button>
          <button onClick={() => handleButtonClick('left-down')}>Left Down</button>
        </div>
        <div className="phaser-container">
          <PhaserGame direction={direction} />
        </div>
        <div className="side-buttons right-buttons">
          <button onClick={() => handleButtonClick('right-up')}>Right Up</button>
          <button onClick={() => handleButtonClick('right-down')}>Right Down</button>
        </div>
      </div>
      <div className="bottom-buttons">
        <button onClick={() => handleButtonClick('down-left')}>Down Left</button>
        <button onClick={() => handleButtonClick('down-right')}>Down Right</button>
      </div>
    </div>
  );
}

export default App;
