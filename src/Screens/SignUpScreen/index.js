import React from 'react';
import { Button, Input } from '../../Components';
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
  PrivacyLabel,
  CheckMark,
  TermsUsetext,
} from './style.js';

import './style.css';
const SignUpScreen = () => {
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
            <SigninHeadingH3>Register</SigninHeadingH3>
            <InputSigninPage>
              <Input placeholder="First Name" />
              <Input placeholder="Last Name" />
              <Input placeholder="Email" />
              <Input placeholder="Phone No" />
              <Input placeholder="Password" />
              <Input placeholder="Driver License Number" />
              <PrivacyLabel style={{ paddingLeft: '38px' }}>
                I accept{' '}
                <TermsUsetext onClick={''}>
                  <u>terms of use</u>
                </TermsUsetext>
                {/* <input checked={showTermsCheck} onClick={handleTermsCondition} type="checkbox" /> */}
                <CheckMark className="checkmark" />
              </PrivacyLabel>
            </InputSigninPage>

            <MtB5>
              <Button title="Register" />
              {/* <LinkSignInBtn disabled={loading} type="submit">
                {loading ? <ClipLoader size={20} color="#1A60A6" loading={loading} /> : 'Register'}
              </LinkSignInBtn> */}
            </MtB5>
          </ContentFooterAreaSignin>
        </MainBgSignin>
      </ImageBackgroundSignin>
    </MainContainer>
  );
};

export default SignUpScreen;
