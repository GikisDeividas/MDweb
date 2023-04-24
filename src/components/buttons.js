import React from 'react';
import './buttons.css';

function Buttons({ onHumanButtonClick, onAIButtonClick }) {
  return (
    <div className="buttons">
      <button className="human-made" onClick={onHumanButtonClick}>
        Human made
      </button>
      <button className="ai-made" onClick={onAIButtonClick}>
        AI made
      </button>
    </div>
  );
}

export default Buttons;
