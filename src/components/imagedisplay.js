import React from 'react';
import './imagedisplay.css';
import BinaryOverlay from './BinaryOverlay';

function ImageDisplay({ imageUrl }) {
  return (
    <div className="image-display">
      <div className="image-wrapper">
        <img src={imageUrl} alt="Generated artwork" />
        <BinaryOverlay />
      </div>
    </div>
  );
}

export default ImageDisplay;
