import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { Button } from '../../Components';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

import '../../Components/Input/style'
import './style.css';

const ContactUsScreen = ({ handleSubmit, handleChange, loading}) => {
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
            <input name="name"  className="input-field" placeholder="Your Name" onChange={handleChange} />
          </div>
          <div className="text-area-field">
              <textarea
                className="text-area-styling"
                rows="4"
                name="message"
                cols="50"
                placeholder="Your queries "
                onChange={handleChange}
              />
          </div>
          <Button
            loading={loading}
            title={'Submit'}
            // disabled={buttonDisable}
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
