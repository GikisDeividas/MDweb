import React from 'react';
import './imagecounter.css';

function ImageCounter({ current, total }) {
  return (
    <div className="image-counter">
      {current}/{total}
    </div>
  );
}

export default ImageCounter;
