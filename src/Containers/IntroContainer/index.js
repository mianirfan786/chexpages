import React from 'react';
import { Button, Input } from '../../Components';
import {
  MainIntroContainer,
  MainContainer,
  ImageBackgroundMain,
  MainBg,
  ContentMainScreen,
  HeadingH5,
  HeadingSpan,
  HeadingH1,
  ContentP,
  ContentFooterarea,
  MtB5,
  SigninBtn,
  ContentDivButton,
  SignUpWithEmail,
} from './style';

const IntroContainer = () => {
  return (
    <MainContainer>
      <ImageBackgroundMain>
        <MainBg>
          <ContentMainScreen>
            <HeadingH5>Welcome to</HeadingH5>
            <HeadingH1>
              CHEX
            <HeadingSpan>.AI</HeadingSpan>
            </HeadingH1>
            <ContentP>Virtual Inspections</ContentP>
            <ContentFooterarea>
              <MtB5>
                <SigninBtn to="/login">Sign in</SigninBtn>
              </MtB5>
              <ContentDivButton>
                <SignUpWithEmail to="/register">Register</SignUpWithEmail>
              </ContentDivButton>
            </ContentFooterarea>
          </ContentMainScreen>
        </MainBg>
      </ImageBackgroundMain>
    </MainContainer>
  );
};
export default IntroContainer;
