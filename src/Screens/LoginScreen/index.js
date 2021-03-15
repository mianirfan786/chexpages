import React from 'react';
import { Input, Button } from '../../Components';
import {
  MainContainer,
  ImageBackgroundSignin,
  MainBgSignin,
  ContentMainScreen,
  ArrowBack,
  ContentFooterAreaSignin,
  SigninHeadingH3,
  LogoSpanColor,
  MainScreenP,
  InputSigninPage,
  ContentMainScreenh5,
  ArrowBackA,
  MtB5,
  LoginPageH1,
  ForgotPasswordText,
  // PrivacyLabel,
  // CheckMark,
} from './style';

const LoginScreen = () => {
  return (
    <MainContainer>
      <ImageBackgroundSignin>
        <MainBgSignin>
          <ContentMainScreen>
            <ContentMainScreenh5>
              <ArrowBack>
                <ArrowBackA to="/">
                  <i className="fas fa-chevron-left fa-2x" />
                </ArrowBackA>
              </ArrowBack>
            </ContentMainScreenh5>
            <LoginPageH1>
              CHEX
              <LogoSpanColor>.AI</LogoSpanColor>
            </LoginPageH1>
            <MainScreenP>Virtual Inspections</MainScreenP>
          </ContentMainScreen>
          <ContentFooterAreaSignin>
            <SigninHeadingH3>Sign in</SigninHeadingH3>
            <InputSigninPage>
              <Input name="email" placeholder="Email" />
              <Input name="password" type="password" placeholder="Password" />
              <ForgotPasswordText to="/forgotPassword">Forgot password?</ForgotPasswordText>
            </InputSigninPage>
            <MtB5>
              <Button title="Sign in" />
              {/* <LinkSignInBtn disabled={loading} type="submit">
                {loading ? <ClipLoader size={20} color="#1A60A6" loading={loading} /> : 'Sign in'}
              </LinkSignInBtn> */}
            </MtB5>
          </ContentFooterAreaSignin>
          <div style={{ height: '100px' }} />
        </MainBgSignin>
      </ImageBackgroundSignin>
    </MainContainer>
  );
};
export default LoginScreen;
