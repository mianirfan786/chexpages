import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

import './style.css';
import '../../App.css';

const VehicleDetailScreen = ({ handleSubmit, vehicleData }) => {
  return (
    <div className="transcation-main-container">
      <div className="transcation-container">
        {/* <Header /> */}
        <div className="transaction-screen-header">
          <Link to="/vehicleInspection">
            <IoIosArrowBack size={32} color="white" />
          </Link>
          <div className="vehicledetail-text">Vehicle Details</div>
          <div></div>
        </div>

        <div className="transaction-form-container-veh">
          <div className="year-container">
            <div className="year-text">{vehicleData?.year}</div>
            <div className="year-date"></div>
          </div>
          <div className="year-container">
            <div className="year-text">{vehicleData?.make}</div>
            <div className="year-date"></div>
          </div>
          <div className="year-container">
            <div className="year-text">{vehicleData?.model}</div>
            <div className="year-date"></div>
          </div>
          <div className="year-container">
            <div className="year-text">Manufacture</div>
            <div className="year-date"></div>
          </div>
          {/* <div className="year-container">
            <div className="year-text">L4, 1.6L; DOCH; 16V</div>
            <div className="year-date">2014</div>
          </div> */}
          <div className="year-container">
            <div className="year-text">Ex</div>
            <div className="year-date"></div>
          </div>
          <div className="year-container">
            <div className="year-text">Automatic</div>
            <div className="year-date"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetailScreen;
