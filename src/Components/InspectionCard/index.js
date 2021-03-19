import React from 'react';
import './style.css';
import { AiFillCamera, AiOutlineDownload } from 'react-icons/ai';

const InspectionCard = ({ title, titletwo }) => {
  return (
    <div>
      <div className="vec-inspection-inspection_card">
        <div className="vec-inspection-camera_icon">
          <AiFillCamera size={22} color="#97A9C5" />
        </div>
        <div className="veh-inspection-downloadicon_center">
          <div className="veh-inspection-download_icon">
            <AiOutlineDownload size={26} color="#1262B1" />
          </div>
        </div>
      </div>
      <p className="veh-inspection-registrationcard_text">{title}</p>
      <p className="veh-inspection-photo_text">{titletwo}</p>
    </div>
  );
};

export default InspectionCard;
