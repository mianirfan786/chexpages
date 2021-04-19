import React from 'react';
import { Button } from '../../Components';

import './style.css';
import '../../App.css';

const ThankyouScreen = ({ handleNext }) => {
  return (
    <div className="intro-main-container">
      <div className="intro-imageBackground-main">
        <div className="intro-mainBgs">
          <div className="thank-contentMain-screen">
            <div className="thank-text-contaner">
              <div className="thankyou-contentP">Thank you for using</div>
              <div className="thankyou-chex-contentP">Chex.AI</div>
              <div className="thank-you-paragrpah">You may now exit our app and one of the representatives will reach out to you for the next steps.</div>
              <Button onClickButton={handleNext} title="Next" />

              <div className="intro-content-footer-area">
                <div className="intro-MtB5"></div>
                <div className="intro-contentDiv-button"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankyouScreen;
