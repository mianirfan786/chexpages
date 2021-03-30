import React from 'react';
import { Link } from 'react-router-dom';
import { CardExpiryElement, CardNumberElement, CardCvcElement } from '@stripe/react-stripe-js';
import { IoIosArrowBack } from 'react-icons/io';
import { Button, Input } from '../../Components';
import { Form } from 'antd';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

import './style.css';
// import '../../App.css';

const ContactUsScreen = ({ priceLoading, handleSubmit, loading, price, buttonDisable }) => {
  return (
    <div className="contact-us-main_container">
      <div className="contact-us-container">
        <div className="contact-us-screen_header">
          <Link to="/vehicleinspection">
            <IoIosArrowBack size={32} color="white" />
          </Link>
          <div></div>
          <div></div>
        </div>
        <div className="contact-us-form_container">
          <p className="contact-us-text">Contact Us</p>
          <div className="input-fields-width">
            <Input placeholder="Name" />
          </div>
          <div className="text-area-field">
            <form>
              <textarea
                className="text-area-styling"
                rows="4"
                cols="50"
                placeholder="Your queries "
              />
            </form>
          </div>
          <Button
            loading={loading}
            title={'Submit'}
            disabled={buttonDisable}
            onClickButton={handleSubmit}
            buttonClass="contact-submit-btn"
          />
          <div></div>
        </div>
        <p className="directlt-reach-text">
          <span style={{ color: 'white', fontWeight: '600', marginRight: '10px' }}>or</span>You can
          directly reach us at
        </p>
        <div className="email-container">
          <AiOutlineMail size={24} color="#FF7A00" style={{ marginTop: '5px' }} />
          <p className="email-text">support@chex.ai</p>
        </div>
        <div className="email-container">
          <AiOutlinePhone size={24} color="#FF7A00" style={{ marginTop: '5px' }} />
          <p className="email-text">(650) 665-9068</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsScreen;
