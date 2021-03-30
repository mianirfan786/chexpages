import React from 'react';
import { Input } from 'antd';

import { InputMainContainer } from './style';

import './style.css';

const InputField = ({ placeholder, handleChange}) => {
  return (
    <InputMainContainer>
      <Input className="input-field" placeholder={placeholder} onChange={handleChange} />
    </InputMainContainer>
  );
};

export default InputField;
