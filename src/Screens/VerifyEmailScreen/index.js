import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

import {
  MainScreenP,
  InputSigninPage,
  VerifiMailText,
  VerifiMailTextSpan,
  ResendLink,
  SigninHeadingHText,
  BackToLogin,
  BackToLoginText,
  ArrowBackLogin,
  ArrowBackALogin,
} from './style';

import './style.css';
import '../../App.css';

const VerifyEmailScreen = ({ isLoading, email, handleResendEmail, logout }) => {
  return (
    <div className="verify-email-container">
      <div className="verify-image-container">
        <div className="verify-email-wrapper">
          <div className="email-content-container">
            <h5 className="email-content-heading">
              {/* <span className="email-content-icon-wrapper"></span>
              <span className="email-icon ">
                <button className="email-btn" type="button">
                  &#9776;
                </button>
              </span> */}
            </h5>

            <h1 className="email-heading">
              CHEX
              <span className="app-logo">.AI</span>
            </h1>
            <MainScreenP>Virtual Inspections</MainScreenP>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '10%',
            }}
          >
            <div className="email-footer-content-container ">
              <SigninHeadingHText>Please check your email and verify your account</SigninHeadingHText>
              <InputSigninPage>
                <VerifiMailText>
                  <VerifiMailTextSpan>{email}</VerifiMailTextSpan>
                </VerifiMailText>
                <ResendLink disabled={isLoading ? true : false} type="button" onClick={handleResendEmail}>
                  {isLoading ? <ClipLoader color={'white'} size={20} /> : 'Resend'}
                </ResendLink>
              </InputSigninPage>
              <BackToLogin>
                <ArrowBackLogin>
                  <ArrowBackALogin to="/login">
                    <i className="fas fa-chevron-left fa-2x" />
                  </ArrowBackALogin>
                </ArrowBackLogin>
                <BackToLoginText onClick={logout}>Back to Login</BackToLoginText>
              </BackToLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailScreen;
