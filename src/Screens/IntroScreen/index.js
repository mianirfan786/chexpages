import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import '../../App.css';

const IntroScreen = () => {
  return (
    <div className="intro-main-container">
      <div className="intro-imageBackground-main">
        <div className="intro-mainBg">
          <div className="intro-contentMain-screen">
            <div className="intro-headingH5">Welcome to</div>
            <div className="intro-headingH1">
              CHEX
              <span className="intro-headingSpan">.AI</span>
            </div>
            <div className="intro-contentP">Virtual Inspections</div>
            {/* <div className="intro-validation-text">
              (Only valid for <span className="intro-state-name">CA</span> drivers)
            </div> */}
            <div className="intro-content-footer-area-intro">
              <div className="intro-MtB5">
                <Link className="intro-signinBtn" to="/login">
                  Sign in
                </Link>
              </div>
              <div className="intro-contentDiv-button">
                <Link className="intro-signUpWith-email" to="/register">
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default IntroScreen;
