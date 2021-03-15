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

const ResetPassword = () => {
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
          <MainScreenP>Please check your email for unique pin and type below</MainScreenP>
          <ContentFooterAreaSignin>
            <div>
              <InputSigninPage>
                <Input name="OTP" placeholder="Unique pin" />
              </InputSigninPage>
              <InputSigninPage>
                <Input name="password" placeholder="Password" />
              </InputSigninPage>
              <InputSigninPage>
                <Input name="confirmPassword" placeholder="Confirm Password" />
              </InputSigninPage>
            </div>
            <MtB5>
              <Button title="Confirm" />
              {/* <LinkSignInBtn disabled={loading} type="submit">
                {loading ? <ClipLoader size={20} color="#1A60A6" loading={loading} /> : 'Confirm'}
              </LinkSignInBtn> */}
            </MtB5>
          </ContentFooterAreaSignin>
        </MainBgSignin>
      </ImageBackgroundSignin>
    </MainContainer>
  );
};

export default ResetPassword;
