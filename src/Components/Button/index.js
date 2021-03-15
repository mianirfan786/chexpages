import React from 'react';
import { ButtonContainer, Title } from './style.js';

const Button = ({ style, title }) => {
  return (
    <ButtonContainer className="button-container" style={{ style }}>
      <Title>{title}</Title>
    </ButtonContainer>
  );
};

export default Button;
