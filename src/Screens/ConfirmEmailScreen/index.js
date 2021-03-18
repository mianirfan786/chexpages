import React from 'react';
import { Link } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

import './style.css';
import '../../App.css';

const ConfirmEmailScreen = ({ isLoading = true }) => {
  return (
    <div className="login-main-container">
      <div className="login-image-background-signin">
        <div className="confirm-email-main-bg-signin">
          <div className="login-content-container">
            <h5 className="login-title-heading">
              <span className="login-back-arrow">
                <Link className="login-arrow-link" to="/">
                  <i className="fas fa-chevron-left fa-2x" />
                </Link>
              </span>
            </h5>
            <h1 className="login-heading-logo">
              CHEX
              <span className="logo-span-color">.AI</span>
            </h1>
            <div className="login-desp-heading">Virtual Inspections</div>
            {isLoading ? (
              <div className="confirm-email-loader">
                <ClipLoader color={'white'} size={50} />{' '}
              </div>
            ) : (
              <h3 className="login-form-heading">Your email has been verified</h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ConfirmEmailScreen;
