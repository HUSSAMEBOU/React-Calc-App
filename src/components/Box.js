import React from 'react';
import './Box.css';

const Box = ({ width, height, isAnimating }) => {
  return (
    <div 
      className={`box ${isAnimating ? 'box-animating' : ''}`} 
      style={{ 
        width: `${width}px`, 
        height: `${height}px` 
      }}
    ></div>
  );
};

export default Box;