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
  setLoading,
  certificateLoading,
  cancleReInspection,
  setCertificateLoading,
  loadingSelect,
  setReInspectionId,
  reInspectionModal,
  setReInspectionModal,
  handleCreateInspection,
  handleCreateReInspection,
  handleLicensePlateNumber,
  reInspectionChecked,
  handleReInspectionCheck,
  setReInspectionLisencePlateNumber,
  reInspectionLisencePlateNumber,
  licensePlateNumber,
  handlEmptyFields,
  inputEmpty,
  setInputEmpty,
  checkEmpty,
  setCheckEmpty,
  checkUnselect,
  setCheckUnselect,
  alreadyExist,
}) => {
  return (
    <div className="main-container">
      <div className="container">
        <div className="content-main-container">
          <div style={{ position: 'relative' }}>
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
              reInspectionModal={reInspectionModal}
              cancleReInspection={cancleReInspection}
              setReInspectionModal={setReInspectionModal}
              setReInspectionLisencePlateNumber={setReInspectionLisencePlateNumber}
              vehiclesByStatus={vehiclesByStatus}
              handleStatus={handleStatus}
            />
          </div>
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
              reInspectionChecked={reInspectionChecked}
              modalChecked={modalChecked}
              handleCancel={handleCancel}
              loadingSelect={loadingSelect}
              handleOk={handleOk}
              checkModal={checkModal}
              showModal={showModal}
              companies={companies}
              handleToast={handleToast}
              handlEmptyFields={handlEmptyFields}
              inputEmpty={inputEmpty}
              setInputEmpty={setInputEmpty}
              checkEmpty={checkEmpty}
              setCheckEmpty={setCheckEmpty}
              checkUnselect={checkUnselect}
              setCheckUnselect={setCheckUnselect}
              cancleReInspection={cancleReInspection}
              handleReInspectionCheck={handleReInspectionCheck}
              setReInspectionModal={setReInspectionModal}
              reInspectionModal={reInspectionModal}
              licensePlateNumber={licensePlateNumber}
              reInspectionLisencePlateNumber={reInspectionLisencePlateNumber}
              handleCreateReInspection={handleCreateReInspection}
              handleLicensePlateNumber={handleLicensePlateNumber}
              handleCreateInspection={handleCreateInspection}
              alreadyExist={alreadyExist}
            />
          </div>
          <div className="tabs-bottom-color" />
        </div>
      </div>
    </div>
  );
};
export default VehicleCombinedStatusScreen;
