import React, { useState, useEffect } from 'react';
import './binaryoverlay.css';

function BinaryOverlay() {
  const [binaryNumbers, setBinaryNumbers] = useState(Array(10).fill(0));

  useEffect(() => {
    const interval = setInterval(() => {
      setBinaryNumbers((prevNumbers) =>
        prevNumbers.map((number) => (Math.random() > 0.5 ? 1 : 0)),
      );
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="binary-overlay">
      {binaryNumbers.map((number, index) => (
        <span key={index}>{number}</span>
      ))}
    </div>
  );
}

export default BinaryOverlay;
