import React from 'react';
import { Header, Button } from '../../Components';
import { CardExpiryElement, CardNumberElement, CardCvcElement } from '@stripe/react-stripe-js';
import { BsChevronLeft } from 'react-icons/bs';

import './style.css';
import '../../App.css';

const ThankyouScreen = ({ handleSubmit }) => {
    return (
        <div className="thankyou-main-container">
            <div className="thankyou-imageBackground-main">
                <div className="heading">
                    Thank you for using
              </div>
                <div className="span-heading">Chex.AI</div>
                <div className="thankyou-text-container">
                    <div className="thankyou-text">
                        You may now exit our app and one of the
                        representatives will reach out to you
                        for the next steps.
              </div>
                </div>
                <Button buttonClass="next-btn" title='Next' />
            </div>
        </div>
    );
};

export default ThankyouScreen;
