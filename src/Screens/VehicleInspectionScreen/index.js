import React from 'react';
import { Collapse, Row, Col } from 'antd';
import { UpCircleOutlined } from '@ant-design/icons';
import { IoIosArrowBack } from 'react-icons/io';
import { FiMenu } from 'react-icons/fi';

import { InspectionCard, NextStepButton, InstructionModal } from '../../Components';
import { verificationItems, interiorItems, exteriorItems, tires } from '../../utils/vehicleParts';
import {
  MainContainer,
  MainDownContainer,
  ImageBackgroundVehicleInspection,
  VehicleInspectionArrowBack,
  VehicleInspectionP,
  ContentVehicleInspection,
  ContentFooterareaVehicleinspection,
  HeaderItem,
  ArrowBackA,
  MainBgInsertDetails,
  MobileViewWarningContainer,
  MobileViewWarning,
  BoldSpan,
} from './style.js';
import './style.css';

const { Panel } = Collapse;

const VehicleInspectionScreen = ({ isModalVisible, handleModal, handleImageUpload }) => {
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
            <HeaderItem>
              <ArrowBackA>
                <i className="fas fa-chevron-left fa-2x" style={{ opacity: 0 }} color="#FFFFFF" />
              </ArrowBackA>

              <div className="vec-inspection-top_header">
                <IoIosArrowBack size={32} color="white" />

                <p className="veh-inspection-chexai_text">
                  CHEX.<span style={{ color: '#FF7A00' }}>AI</span>
                </p>
                <FiMenu size={32} color="white" />
              </div>

              <VehicleInspectionArrowBack></VehicleInspectionArrowBack>
            </HeaderItem>
            <MainDownContainer>
              <VehicleInspectionP>Please complete inpection items within each category below</VehicleInspectionP>
            </MainDownContainer>

            <div className="veh-inspection-mobilepaddind">
              <MobileViewWarningContainer>
                <MobileViewWarning>
                  Please use <BoldSpan>mobile phone </BoldSpan>for optimal perfomance
                </MobileViewWarning>
              </MobileViewWarningContainer>
            </div>
          </ContentVehicleInspection>
        </MainBgInsertDetails>

        <MainDownContainer>
          <ContentFooterareaVehicleinspection>
            <Collapse
              defaultActiveKey={['1']}
              expandIconPosition="right"
              expandIcon={({ isActive }) => (
                <UpCircleOutlined
                  style={isActive ? { fontSize: 32, color: '#FF7A00', marginTop: -7 } : { fontSize: 32, color: 'lightGray', marginTop: -7 }}
                  rotate={isActive ? 180 : 0}
                />
              )}
            >
              <Panel
                style={{ overflow: 'hidden' }}
                header={
                  <Row gutter={40} style={{ overflow: 'hidden' }}>
                    <Col>
                      <div className="veh-inspection-verification_text">Car verification item</div>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                  </Row>
                }
                key="1"
                extra={genExtra}
              >
                <div className="veh-inspection-cards_container">
                  {verificationItems?.map((item) => (
                    <div className="veh-inspection-first_card">
                      <InspectionCard handleModal={handleModal} category={item.id} title={item.title} titletwo={item.type} type={item.type} />
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
                  {interiorItems.map((item) => (
                    <div className="veh-inspection-first_card">
                      <InspectionCard handleModal={handleModal} category={item.id} title={item.title} titletwo={item.type} type={item.type} />
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
                  {exteriorItems?.map((item) => (
                    <div className="veh-inspection-first_card">
                      <InspectionCard handleModal={handleModal} category={item.id} title={item.title} titletwo={item.type} type={item.type} />
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
                  {tires?.map((item) => (
                    <div className="veh-inspection-first_card">
                      <InspectionCard handleModal={handleModal} category={item.id} title={item.title} titletwo={item.type} type={item.type} />
                    </div>
                  ))}
                </div>
                <NextStepButton />
              </Panel>
            </Collapse>
            <div className="vec-inspection-submitbtn_container">
              <button className="vec-inspection-submit_button">Submit</button>
            </div>
          </ContentFooterareaVehicleinspection>
        </MainDownContainer>
      </ImageBackgroundVehicleInspection>
      <InstructionModal handleImageUpload={handleImageUpload} isModalVisible={isModalVisible} />
    </MainContainer>
  );
};
export default VehicleInspectionScreen;
