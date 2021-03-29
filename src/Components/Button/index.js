import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

import { ButtonContainer, Title } from './style.js';

const Button = ({ style, title, buttonClass, onClickButton, loading = false, disabled = false }) => {
  return disabled ? (
    <ButtonContainer className={buttonClass} style={style}>
      <Title>{<ClipLoader color={'white'} size={20} />}</Title>
    </ButtonContainer>
  ) : (
    <ButtonContainer onClick={onClickButton} className={buttonClass} style={style}>
      <Title>{loading ? <ClipLoader color={'white'} size={20} /> : title}</Title>
    </ButtonContainer>
  );
};

export default Button;
