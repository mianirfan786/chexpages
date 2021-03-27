import React from 'react';
import { Collapse, Row, Col } from 'antd';
import { UpCircleOutlined } from '@ant-design/icons';

import {
  InspectionCard,
  NextStepButton,
  InstructionModal,
  Header,
  SurveyModal,
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
  surveyModalLoading,
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
                        <div className="veh-inspection-verification_text">
                          Car verification item
                        </div>
                      </Col>
                      <Col></Col>
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
                          deleteFile={deleteFile}
                        />
                      </div>
                    ))}
                  </div>
                  <NextStepButton />
                </Panel>
                <Panel
                  style={{ overflow: 'hidden' }}
                  header={
                    <Row gutter={40} style={{ overflow: 'hidden' }}>
                      <Col>
                        <div className="veh-inspection-verification_text">Interior items</div>
                      </Col>
                      <Col></Col>
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
                          deleteFile={deleteFile}
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
                  <NextStepButton />
                </Panel>
                <Panel
                  style={{ overflow: 'hidden' }}
                  header={
                    <Row gutter={40} style={{ overflow: 'hidden' }}>
                      <Col>
                        <div className="veh-inspection-verification_text">Exterior items</div>
                      </Col>
                      <Col></Col>
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
                          deleteFile={deleteFile}
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
                  <NextStepButton />
                </Panel>
                <Panel
                  style={{ overflow: 'hidden' }}
                  header={
                    <Row gutter={40} style={{ overflow: 'hidden' }}>
                      <Col>
                        <div className="veh-inspection-verification_text">Tires</div>
                      </Col>
                      <Col></Col>
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
                          deleteFile={deleteFile}
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
                  <NextStepButton />
                </Panel>
              </Collapse>
              <div className="vec-inspection-submitbtn_container">
                <button
                  onClick={() => handleSurveyModal(true)}
                  className="vec-inspection-submit_button"
                >
                  Submit
                </button>
              </div>
            </ContentFooterareaVehicleinspection>
            <InstructionModal
              isLoading={isLoading}
              handleVideoUpload={handleVideoUpload}
              vehicleInstructionValues={vehicleInstructionValues}
              handleImageUpload={handleImageUpload}
              isModalVisible={isModalVisible}
              handleModalClose={handleModalClose}
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
          </MainDownContainer>
        </MainBgInsertDetails>
      </ImageBackgroundVehicleInspection>
    </MainContainer>
  );
};
export default VehicleInspectionScreen;
