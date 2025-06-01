import React, { useState } from 'react';
import ColorPicker from './components/ColorPicker';
import GradientControls from './components/GradientControls';
import GradientPreview from './components/GradientPreview';
import OutputCode from './components/OutputCode';
import './App.css';

function App() {
  const [color1, setColor1] = useState('#FF0000');
  const [color2, setColor2] = useState('#FFFF00');
  const [gradientType, setGradientType] = useState('linear');
  const [direction, setDirection] = useState('to right');

  const generateGradient = () => {
    if (gradientType === 'linear') {
      return `linear-gradient(${direction}, ${color1}, ${color2})`;
    } else {
      return `radial-gradient(circle, ${color1}, ${color2})`;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`background: ${generateGradient()};`);
    alert('CSS copied to clipboard!');
  };

  return (
    <div className="app">
      <h1>React Gradient Generator</h1>
      
      <div className="color-pickers">
        <ColorPicker 
          color={color1} 
          onChange={setColor1} 
          label="Color 1" 
        />
        <ColorPicker 
          color={color2} 
          onChange={setColor2} 
          label="Color 2" 
        />
      </div>

      <GradientControls 
        gradientType={gradientType}
        direction={direction}
        onTypeChange={(e) => setGradientType(e.target.value)}
        onDirectionChange={(e) => setDirection(e.target.value)}
      />

      <GradientPreview gradient={generateGradient()} />

      <OutputCode 
        gradient={generateGradient()} 
        onCopy={handleCopy} 
      />
    </div>
  );
}

export default App;