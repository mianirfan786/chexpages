import React from 'react';
import { ButtonContainer, Title } from './style.js';

const Button = ({ style, title }) => {
  return (
    <ButtonContainer style={{ style }}>
      <Title>{title}</Title>
    </ButtonContainer>
  );
};

export default Button;
