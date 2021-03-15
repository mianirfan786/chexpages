import React from 'react';
import { Button, Input } from '../../Components';

import { MainIntroContainer } from './style';

const IntroContainer = () => {
  return (
    <MainIntroContainer>
      <Button title={'signIn'} />
      <Input placeholder="Signin" />
    </MainIntroContainer>
  );
};
export default IntroContainer;
