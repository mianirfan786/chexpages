import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

import { ButtonContainer, Title } from './style.js';

const Button = ({ style, title, buttonClass, onClickButton, loading = false }) => {
  return (
    <ButtonContainer onClick={onClickButton} className={buttonClass} style={style}>
      <Title>{loading ? <ClipLoader color={'white'} size={20} /> : title}</Title>
    </ButtonContainer>
  );
};

export default Button; 
