import React from 'react';
import './accuracymessage.css';

function AccuracyMessage({ accuracy }) {
  return (
    <div className="accuracy-message">
      <p>
        Thank you for trying! Your accuracy is{' '}
        <span>{accuracy.toFixed(2)}%</span>.
      </p>
    </div>
  );
}

export default AccuracyMessage;
