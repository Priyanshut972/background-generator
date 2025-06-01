import React from 'react';

const GradientControls = ({ 
  gradientType, 
  direction, 
  onTypeChange, 
  onDirectionChange 
}) => {
  return (
    <div className="gradient-controls">
      <div className="form-group">
        <label>Gradient Type</label>
        <select value={gradientType} onChange={onTypeChange}>
          <option value="linear">Linear</option>
          <option value="radial">Radial</option>
        </select>
      </div>

      {gradientType === 'linear' && (
        <div className="form-group">
          <label>Direction</label>
          <select value={direction} onChange={onDirectionChange}>
            <option value="to right">Left to Right</option>
            <option value="to left">Right to Left</option>
            <option value="to bottom">Top to Bottom</option>
            <option value="to top">Bottom to Top</option>
            <option value="to bottom right">Diagonal (Top Left to Bottom Right)</option>
            <option value="to top left">Diagonal (Bottom Right to Top Left)</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default GradientControls;