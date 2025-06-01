import React from 'react';

const OutputCode = ({ gradient, onCopy }) => {
  return (
    <div className="output-code">
      <h3>CSS Code:</h3>
      <textarea 
        value={`background: ${gradient};`} 
        readOnly 
      />
      <button onClick={onCopy}>Copy CSS</button>
    </div>
  );
};

export default OutputCode;