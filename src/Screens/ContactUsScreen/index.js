import React from 'react';
import { Link } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';

// import './style.css';
import '../../App.css';

const ContactUsScreen = (props) => {
  return (
    <div className="container">
      <div className="transcation-container">
        {/* <Header /> */} 
        <div className="transaction-screen-header">
          <Link to="/">
            <BsChevronLeft color={'white'} className="header-icon" />
          </Link>
          <div className="vehicledetail-text">Contact Us</div>
          <div></div>
        </div>
        <>
            <p>Name:</p>
            <input placeholder="Enter your Name:" ></input>
            <p>Comment</p>
            <textarea></textarea>
        </>
        {/* <div className="transaction-form-container">
          <div className="year-container">
            <div className="year-text">Year</div>
            <div className="year-date">2014</div>
          </div>
          <div className="year-container">
            <div className="year-text">Make</div>
            <div className="year-date">Kia</div>
          </div>
          <div className="year-container">
            <div className="year-text">Model</div>
            <div className="year-date">Rio</div>
          </div>
          <div className="year-container">
            <div className="year-text">Manufacture</div>
            <div className="year-date">Kia</div>
          </div>
          <div className="year-container">
            <div className="year-text">L4, 1.6L; DOCH; 16V</div>
            <div className="year-date">2014</div>
          </div>
          <div className="year-container">
            <div className="year-text">Ex</div>
            <div className="year-date">2014</div>
          </div>
          <div className="year-container">
            <div className="year-text">Automatic</div>
            <div className="year-date">2014</div>
          </div>
        </div> */}
      </div>
    </div>
    // <div>Check</div>
  );
};

export default ContactUsScreen;
