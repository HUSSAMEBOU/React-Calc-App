import React from 'react';
import './Box.css';

const Box = ({ width, height, isAnimating, hue }) => {
  // استخدام HSL لإنشاء لون ديناميكي بناءً على hue
  const dynamicGradient = `linear-gradient(145deg, hsl(${hue}, 70%, 50%), hsl(${hue}, 80%, 40%))`;
  const boxShadowColor = `hsl(${hue}, 70%, 50%)`;

  return (
    <div 
      className={`box ${isAnimating ? 'box-animating' : ''}`} 
      style={{ 
        width: `${width}px`, 
        height: `${height}px`,
        background: dynamicGradient,
        boxShadow: `0 15px 35px ${boxShadowColor}40` // 40 = شفافية 25%
      }}
    ></div>
  );
};

export default Box;
