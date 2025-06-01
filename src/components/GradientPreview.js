import React from 'react';
import styled from 'styled-components';

const PreviewContainer = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 8px;
  margin: 20px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.gradient};
`;

const GradientPreview = ({ gradient }) => {
  return (
    <PreviewContainer gradient={gradient}>
      <span className="preview-text">Gradient Preview</span>
    </PreviewContainer>
  );
};

export default GradientPreview;