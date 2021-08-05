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
  setLoading,
  certificateLoading,
  setCertificateLoading,
  setReInspectionId,
  reInspectionModal,
  setReInspectionModal,
  handleCreateInspection,
  handleCreateReInspection,
  handleLicensePlateNumber,
  setReInspectionLisencePlateNumber,
  reInspectionLisencePlateNumber,
  licensePlateNumber,
}) => {
  return (
    <div className="main-container">
      <div className="container">

        <div className="content-main-container">
          <Header />

          <TabComponent
            handleCancel={handleCancel}
            handleOk={handleOk}
            checkModal={checkModal}
            showModal={showModal}
            isLoading={isLoading}
            setLoading={setLoading}
            certificateLoading={certificateLoading}
            setCertificateLoading={setCertificateLoading}
            setReInspectionId={setReInspectionId}
            setReInspectionModal={setReInspectionModal}
            setReInspectionLisencePlateNumber={setReInspectionLisencePlateNumber}
            vehiclesByStatus={vehiclesByStatus}
            handleStatus={handleStatus}
          />



          <div className="modals-main-container">
            {/* <div style={{ position: 'absolute', bottom: 250, left: 60 }}>
              {isLoading ? null : (
                <>
                  {' '}
                  {vehiclesByStatus?.length === 0 ? (
                    <div className="white-border-bottom_container">
                      <div>
                        {status === 'IN_PROGRESS' ? 'No vehicle is in Draft state' : status === 'REVIEWED' ? 'No vehicle is in Reviewed state' : 'No vehicle is in In-review state'}
                      </div>
                    </div>
                  ) : (
                    <div className="white-border-bottom_container">
                      <div className="white-border-bottom" />
                    </div>
                  )}
                </>
              )}
            </div> */}

            <InspectionButtonModalComponent
              isModalVisible={isModalVisible}
              modalChecked={modalChecked}
              handleCancel={handleCancel}
              handleOk={handleOk}
              checkModal={checkModal}
              showModal={showModal}
              companies={companies}
              handleToast={handleToast}
              setReInspectionModal={setReInspectionModal}
              reInspectionModal={reInspectionModal}
              licensePlateNumber={licensePlateNumber}
              reInspectionLisencePlateNumber={reInspectionLisencePlateNumber}
              handleCreateReInspection={handleCreateReInspection}
              handleLicensePlateNumber={handleLicensePlateNumber}
              handleCreateInspection={handleCreateInspection}
            />
          </div>

        </div>
      </div>
    </div>
  );
};
export default VehicleCombinedStatusScreen;
