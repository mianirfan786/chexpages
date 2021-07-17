import React from 'react';
import './style.css';

import { Header, TabComponent, InspectionButtonModalComponent } from '../../Components';

const VehicleCombinedStatusScreen = ({ handleStatus }) => {
  return (
    <div className="main-container">
      <div className="container">
        <div className="content-main-container">
          <Header />
          <div className="modals-main-container">
            <TabComponent handleStatus={handleStatus} />
            <div className="white-border-bottom_container">
              <div className="white-border-bottom" />
            </div>
            <InspectionButtonModalComponent />
          </div>
        </div>
      </div>
    </div>
  );
};
export default VehicleCombinedStatusScreen;
