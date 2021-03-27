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

const VehicleStatusScreen = ({
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
                        <div className="veh-inspection-verification_text">Ready for review</div>
                      </Col>
                      <Col></Col>
                      <Col></Col>
                    </Row>
                  }
                  key="1"
                  extra={genExtra}
                >
                  <NextStepButton title="Download vehicle report" />
                </Panel>
              </Collapse>
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
export default VehicleStatusScreen;
