import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { Collapse, Row, Col } from 'antd';
import { UpCircleOutlined } from '@ant-design/icons';
import { BsCheckCircle } from 'react-icons/bs';

import {
  InspectionCard,
  InstructionModal,
  Header,
  SurveyModal,
  ConfimrationModal,
} from '../../Components';
import {
  MainContainer,
  MainDownContainer,
  ImageBackgroundVehicleInspection,
  VehicleInspectionP,
  ContentVehicleInspection,
  ContentFooterareaVehicleinspection,
  MainBgInsertDetails,
  MobileViewWarningContainer,
  MobileViewWarning,
  BoldSpan,
} from './style.js';
import './style.css';

const { Panel } = Collapse;

const VehicleInspectionScreen = ({
  vehicleInstructionValues,
  isModalVisible,
  handleModal,
  handleImageUpload,
  vehicleInstructions,
  handleVideoUpload,
  isLoading,
  handleModalClose,
  isSurveyModalVisible,
  handleSurveyModal,
  changeRating,
  rating,
  handleCheckBox,
  handleComment,
  handleSubmitSurvey,
  deleteFile,
  handleDeleteModal,
  surveyModalLoading,
  isDeleteModal,
  setDeleteModal,
  deleteLoading,
  uploadingPercentage,
  paymentStatus,
  changeVehicleStatus,
  vehicleStatusLoading,
}) => {
  const genExtra = () => (
    <UpCircleOutlined
      onClick={(event) => {
        event.stopPropagation();
      }}
    />
  );

  return (
    <MainContainer>
      <ImageBackgroundVehicleInspection>
        {console.log('wewew', paymentStatus)}
        <MainBgInsertDetails>
          <ContentVehicleInspection>
            <Header />
            <MainDownContainer>
              <VehicleInspectionP>
                Please complete inspection items within each category below
              </VehicleInspectionP>
            </MainDownContainer>

            <div className="veh-inspection-mobilepaddind">
              <MobileViewWarningContainer>
                <MobileViewWarning>
                  Please use <BoldSpan>mobile phone </BoldSpan>for optimal perfomance
                </MobileViewWarning>
              </MobileViewWarningContainer>
            </div>
          </ContentVehicleInspection>

          <MainDownContainer>
            <ContentFooterareaVehicleinspection>
              <Collapse
                defaultActiveKey={['1']}
                expandIconPosition="right"
                expandIcon={({ isActive }) => (
                  <UpCircleOutlined
                    style={
                      isActive
                        ? { fontSize: 32, color: '#FF7A00', marginTop: -7 }
                        : { fontSize: 32, color: 'lightGray', marginTop: -7 }
                    }
                    rotate={isActive ? 180 : 0}
                  />
                )}
              >
                <Panel
                  style={{ overflow: 'hidden' }}
                  header={
                    <Row gutter={40} style={{ overflow: 'hidden' }}>
                      <Col>
                        {vehicleInstructions?.verificationItem.filter((e) => e.url).length === 2 ? (
                          <BsCheckCircle color="#FF7A01" size={22} />
                        ) : (
                          <BsCheckCircle color="#bab8b8" size={22} />
                        )}
                      </Col>

                      <Col>
                        <div className="veh-inspection-verification_text">
                          Car verification item
                        </div>
                      </Col>
                      <Col></Col>
                    </Row>
                  }
                  key="1"
                  extra={genExtra}
                >
                  <div className="veh-inspection-cards_container">
                    {vehicleInstructions?.verificationItem?.map((item, index) => (
                      <div key={index} className="veh-inspection-first_card">
                        <InspectionCard
                          groupType="carVerificiationItems"
                          item={item}
                          handleModal={handleModal}
                          category={item.id}
                          title={item.title}
                          titletwo={item.type}
                          type={item.type}
                          deleteFile={handleDeleteModal}
                        />
                      </div>
                    ))}
                  </div>
                  {/* <NextStepButton /> */}
                </Panel>
                <Panel
                  style={{ overflow: 'hidden' }}
                  header={
                    <Row gutter={40} style={{ overflow: 'hidden' }}>
                      <Col>
                        {vehicleInstructions?.interiorItems.filter((e) => e.url).length === 6 ? (
                          <BsCheckCircle color="#FF7A01" size={22} />
                        ) : (
                          <BsCheckCircle color="#bab8b8" size={22} />
                        )}
                      </Col>
                      <Col>
                        <div className="veh-inspection-verification_text">Interior items</div>
                      </Col>
                      <Col></Col>
                    </Row>
                  }
                  key="2"
                  extra={genExtra}
                >
                  <div className="veh-inspection-cards_container">
                    {vehicleInstructions?.interiorItems.map((item, index) => (
                      <div key={index} className="veh-inspection-first_card">
                        <InspectionCard
                          deleteFile={handleDeleteModal}
                          groupType="interiorItems"
                          item={item}
                          handleModal={handleModal}
                          category={item.id}
                          title={item.title}
                          titletwo={item.type}
                          type={item.type}
                        />
                      </div>
                    ))}
                  </div>
                  {/* <NextStepButton /> */}
                </Panel>
                <Panel
                  style={{ overflow: 'hidden' }}
                  header={
                    <Row gutter={40} style={{ overflow: 'hidden' }}>
                      <Col>
                        {vehicleInstructions?.exteriorItems.filter((e) => e.url).length === 4 ? (
                          <BsCheckCircle color="#FF7A01" size={22} />
                        ) : (
                          <BsCheckCircle color="#bab8b8" size={22} />
                        )}
                      </Col>
                      <Col>
                        <div className="veh-inspection-verification_text">Exterior items</div>
                      </Col>
                      <Col></Col>
                    </Row>
                  }
                  key="3"
                  extra={genExtra}
                >
                  <div className="veh-inspection-cards_container">
                    {vehicleInstructions?.exteriorItems?.map((item, index) => (
                      <div key={index} className="veh-inspection-first_card">
                        <InspectionCard
                          deleteFile={handleDeleteModal}
                          groupType="exteriorItems"
                          item={item}
                          handleModal={handleModal}
                          category={item.id}
                          title={item.title}
                          titletwo={item.type}
                          type={item.type}
                        />
                      </div>
                    ))}
                  </div>
                  {/* <NextStepButton /> */}
                </Panel>
                <Panel
                  style={{ overflow: 'hidden' }}
                  header={
                    <Row gutter={40} style={{ overflow: 'hidden' }}>
                      <Col>
                        {vehicleInstructions?.tires.filter((e) => e.url).length === 4 ? (
                          <BsCheckCircle color="#FF7A01" size={22} />
                        ) : (
                          <BsCheckCircle color="#bab8b8" size={22} />
                        )}
                      </Col>
                      <Col>
                        <div className="veh-inspection-verification_text">Tires</div>
                      </Col>
                      <Col></Col>
                    </Row>
                  }
                  key="4"
                  extra={genExtra}
                >
                  <div className="veh-inspection-cards_container">
                    {vehicleInstructions?.tires?.map((item, index) => (
                      <div key={index} className="veh-inspection-first_card">
                        <InspectionCard
                          deleteFile={handleDeleteModal}
                          groupType="tires"
                          item={item}
                          handleModal={handleModal}
                          category={item.id}
                          title={item.title}
                          titletwo={item.type}
                          type={item.type}
                        />
                      </div>
                    ))}
                  </div>
                  {/* <NextStepButton /> */}
                </Panel>
              </Collapse>
              {paymentStatus ? (
                <div className="vec-inspection-submitbtn_container">
                  <button
                    disabled={vehicleStatusLoading}
                    onClick={changeVehicleStatus}
                    className="vec-inspection-submit_button"
                  >
                    {vehicleStatusLoading ? <ClipLoader color={'white'} size={20} /> : 'Submit'}
                  </button>
                </div>
              ) : vehicleInstructions?.exteriorItems.filter((e) => e.url).length === 4 &&
                vehicleInstructions?.interiorItems.filter((e) => e.url).length === 6 &&
                vehicleInstructions?.tires.filter((e) => e.url).length === 4 &&
                vehicleInstructions?.verificationItem.filter((e) => e.url).length === 2 ? (
                <div className="vec-inspection-submitbtn_container">
                  <button
                    onClick={() => handleSurveyModal(true)}
                    className="vec-inspection-submit_button"
                  >
                    Submit
                  </button>
                </div>
              ) : (
                <div className="vec-inspection-submitbtn_container">
                  <button
                    style={{ background: 'gray' }}
                    disabled={true}
                    className="vec-inspection-submit_button"
                  >
                    Submit
                  </button>
                </div>
              )}
            </ContentFooterareaVehicleinspection>
            <InstructionModal
              isLoading={isLoading}
              handleVideoUpload={handleVideoUpload}
              vehicleInstructionValues={vehicleInstructionValues}
              handleImageUpload={handleImageUpload}
              isModalVisible={isModalVisible}
              handleModalClose={handleModalClose}
              uploadingPercentage={uploadingPercentage}
            />

            <SurveyModal
              changeRating={changeRating}
              rating={rating}
              isSurveyModalVisible={isSurveyModalVisible}
              handleSurveyModal={handleSurveyModal}
              handleCheckBox={handleCheckBox}
              handleComment={handleComment}
              handleSubmitSurvey={handleSubmitSurvey}
              surveyModalLoading={surveyModalLoading}
            />
            <ConfimrationModal
              loading={deleteLoading}
              handleModal={setDeleteModal}
              onClickYes={deleteFile}
              isVisible={isDeleteModal}
            />
          </MainDownContainer>
        </MainBgInsertDetails>
      </ImageBackgroundVehicleInspection>
    </MainContainer>
  );
};
export default VehicleInspectionScreen;
