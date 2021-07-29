import React from 'react';
import './style.css';

import { Header, TabComponent, InspectionButtonModalComponent } from '../../Components';

const VehicleCombinedStatusScreen = ({
  handleStatus,
  vehiclesByStatus,
  companies,
  isLoading,
  handleCancel,
  handleOk,
  checkModal,
  showModal,
  isModalVisible,
  modalChecked,
  handleToast,
  status,
  handleCreateInspection,
  handleLicensePlateNumber,
  licensePlateNumber }) => {

  return (
    <div className="main-container">
      <div className="container">
        <div className="content-main-container">

          <Header />

          <div className="modals-main-container">
            <TabComponent
              handleCancel={handleCancel}
              handleOk={handleOk}
              checkModal={checkModal}
              showModal={showModal}
              isLoading={isLoading}
              vehiclesByStatus={vehiclesByStatus}
              handleStatus={handleStatus} />
            {isLoading ? null :
              <> {vehiclesByStatus?.length === 0 ? <div className="white-border-bottom_container"><div>{status === 'IN_PROGRESS' ? "No vehicle is in Draft state" : status === 'REVIEWED' ? 'No vehicle is in Reviewed state' : "No vehicle is in In-review state"}</div></div>
                :
                <div className="white-border-bottom_container">
                  <div className="white-border-bottom" />
                </div>}
              </>
            }
            <InspectionButtonModalComponent
              isModalVisible={isModalVisible}
              modalChecked={modalChecked}
              handleCancel={handleCancel}
              handleOk={handleOk}
              checkModal={checkModal}
              showModal={showModal}
              companies={companies}
              handleToast={handleToast}
              licensePlateNumber={licensePlateNumber}
              handleLicensePlateNumber={handleLicensePlateNumber}
              handleCreateInspection={handleCreateInspection} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default VehicleCombinedStatusScreen;
