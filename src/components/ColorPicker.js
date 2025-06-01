import React from 'react';
import { ChromePicker } from 'react-color';

const ColorPicker = ({ color, onChange, label }) => {
  return (
    <div className="color-picker">
      <label>{label}</label>
      <ChromePicker 
        color={color}
        onChangeComplete={(color) => onChange(color.hex)}
        disableAlpha
      />
    </div>
  );
};

export default ColorPicker;