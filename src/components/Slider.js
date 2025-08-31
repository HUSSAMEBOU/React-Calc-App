import React from 'react';
import './Slider.css';

const Slider = ({ label, value, onChange, min, max }) => {
  return (
    <div className="slider-container">
      <label className="slider-label">
        {label}: <span className="value-highlight">{value}px</span>
      </label>
      <input 
        type="range" 
        min={min} 
        max={max} 
        value={value} 
        onChange={(e) => onChange(Number(e.target.value))} 
        className="slider-input"
      />
    </div>
  );
};

export default Slider;