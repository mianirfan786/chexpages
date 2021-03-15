import React from 'react';
import { Input } from 'antd';

import { InputMainContainer } from './style';

const InputField = ({ placeholder }) => {
  return (
    <InputMainContainer style={{ width: '50%' }}>
      <Input placeholder={placeholder} />
    </InputMainContainer>
  );
};

export default InputField;
