import React from 'react';
import { Input } from 'antd';

import { InputMainContainer } from './style';

import './style.css';

const InputField = ({ placeholder }) => {
  return (
    <InputMainContainer>
      <Input className="input-field" placeholder={placeholder} />
    </InputMainContainer>
  );
};

export default InputField;
