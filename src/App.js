// App.js
import React, { useState, useEffect } from 'react';
import Box from './components/Box';
import Slider from './components/Slider';
import './App.css';

function App() {
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(500);
  const [hue, setHue] = useState(240); // القيمة الابتدائية (أزرق)
  const [isAnimating, setIsAnimating] = useState(false);
  const area = width * height;

  // تفعيل التأثير عند تغيير الأبعاد أو اللون
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [width, height, hue]);

  return (
    <div className="app-container">
      <div className="main-content">
        <h1>تغيير أبعاد المربع</h1>
        
        <div className="box-container">
          <Box 
            width={width} 
            height={height} 
            isAnimating={isAnimating}
            hue={hue} // تمرير صبغة اللون
          />
        </div>
        
        <div className="sliders-container">
          <Slider 
            label="العرض" 
            value={width} 
            onChange={setWidth} 
            min="100" 
            max="1000" 
          />
          <Slider 
            label="الارتفاع" 
            value={height} 
            onChange={setHeight} 
            min="100" 
            max="1000" 
          />
          <Slider 
            label="اللون" 
            value={hue} 
            onChange={setHue} 
            min="0" 
            max="360" 
            unit="°"
          />
        </div>
        
        <div className="area-display">
          المساحة: {area.toLocaleString()} بكسل²
        </div>
      </div>
    </div>
  );
}

export default App;