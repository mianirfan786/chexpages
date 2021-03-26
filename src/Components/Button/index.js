import React from 'react';
import { ButtonContainer, Title } from './style.js';

const Button = ({ style, title, buttonClass }) => {
  return (
    <ButtonContainer className={buttonClass} style={style}>
      <Title>{title}</Title>
    </ButtonContainer>
  );
};

export default Button;
