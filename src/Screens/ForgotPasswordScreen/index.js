import React from 'react';
import { Input, Button } from '../../Components';
import {
  MainContainer,
  ImageBackgroundSignin,
  MainBgSignin,
  ArrowBack,
  ContentFooterAreaSignin,
  MainScreenP,
  InputSigninPage,
  ArrowBackA,
  MtB5,
  //   LinkSignInBtn,
  HeaderItem,
  ContentVehicleInspectionH1,
} from './style.js';

const ForgotPasswordScreen = () => {
  return (
    <MainContainer>
      <ImageBackgroundSignin>
        <MainBgSignin>
          <HeaderItem>
            <ArrowBack>
              <ArrowBackA to="/">
                <i className="fas fa-chevron-left fa-2x" />
              </ArrowBackA>
            </ArrowBack>

            <ContentVehicleInspectionH1>Forgot password</ContentVehicleInspectionH1>
          </HeaderItem>
          <MainScreenP>Type email for password reset</MainScreenP>

          <ContentFooterAreaSignin>
            <InputSigninPage>
              <Input placeholder="Email" />
            </InputSigninPage>
            <MtB5>
              <Button title="Send" />
              {/* <LinkSignInBtn disabled={loading} type="submit">
                {loading ? <ClipLoader size={20} color="#1A60A6" loading={loading} /> : 'Send'}
              </LinkSignInBtn> */}
            </MtB5>
          </ContentFooterAreaSignin>
        </MainBgSignin>
      </ImageBackgroundSignin>
    </MainContainer>
  );
};

export default ForgotPasswordScreen;
