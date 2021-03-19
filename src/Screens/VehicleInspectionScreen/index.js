import React from 'react';
import { Collapse, Row, Col, Typography, Button } from 'antd';
import { UpCircleOutlined } from '@ant-design/icons';
import { IoIosArrowBack } from 'react-icons/io';
import { FiMenu } from 'react-icons/fi';
import InspectionCard from '../../Components/InspectionCard';
import NextStepButton from '../../Components/NextStepButton';
import {
  MainContainer,
  MainDownContainer,
  ImageBackgroundVehicleInspection,
  ContentVehicleInspectionH1,
  VehicleInspectionArrowBack,
  OpenNavSpan,
  ContentVehicleInspectionH1Span,
  VehicleInspectionP,
  ContentVehicleInspection,
  ContentFooterareaVehicleinspection,
  RowContentVehicleInspection,
  MtB5VehicleInspection,
  VehicalDetailButton,
  VehicleDetailBtnContainer,
  LinkSignInBtn,
  HeaderItem,
  ArrowBackA,
  MainBgInsertDetails,
  LinkSignInBtn1,
  LinkSignInBtnDisable,
  LinkBtn,
  MobileViewWarningContainer,
  MobileViewWarning,
  BoldSpan,
} from './style.js';
import './style.css';

const { Panel } = Collapse;
const { Paragraph } = Typography;

const VehicleInspectionScreen = () => {
  const genExtra = () => (
    <UpCircleOutlined
      onClick={(event) => {
        // If you don't want click extra trigger collapse, you can prevent this:
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
              {/* <ContentVehicleInspectionH1>
                CHEX
                <ContentVehicleInspectionH1Span>.AI</ContentVehicleInspectionH1Span>
              </ContentVehicleInspectionH1> */}

              <div className="vec-inspection-top_header">
                <IoIosArrowBack size={32} color="white" />

                <p className="veh-inspection-chexai_text">
                  CHEX.<span style={{ color: '#FF7A00' }}>AI</span>
                </p>
                <FiMenu size={32} color="white" />
              </div>

              <VehicleInspectionArrowBack>
                {/* <OpenNavSpan type="button" onClick={() => setShowSidebar(true)}>
                  &#9776;
                </OpenNavSpan> */}
              </VehicleInspectionArrowBack>
            </HeaderItem>
            <MainDownContainer>
              <VehicleInspectionP>
                Please complete inpection items within each category below
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
          {/* <VehicleDetailBtnContainer></VehicleDetailBtnContainer> */}
        </MainBgInsertDetails>

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
                  <div className="veh-inspection-first_card">
                    <InspectionCard title="Registration Card" titletwo="Photo" />
                  </div>
                  <div className="veh-inspection-second_card">
                    <InspectionCard title="Odometer" titletwo="Photo" />
                  </div>
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
                  <div className="veh-inspection-first_card">
                    <InspectionCard title="Horn" titletwo="Clip" />
                  </div>
                  <div className="veh-inspection-second_card">
                    <InspectionCard title="Interior Driverside" titletwo="Photo" />
                  </div>
                </div>
                <div className="veh-inspection-cards_container">
                  <div className="veh-inspection-first_card">
                    <InspectionCard title="Driver seat Adjusted" titletwo="Photo" />
                  </div>
                  <div className="veh-inspection-second_card">
                    <InspectionCard title="Interior Passengerside" titletwo="Photo" />
                  </div>
                </div>
                <div className="veh-inspection-cards_container">
                  <div className="veh-inspection-first_card">
                    <InspectionCard title="Passenger seat Adjusted" titletwo="Photo" />
                  </div>
                  <div className="veh-inspection-second_card">
                    <InspectionCard title="Interior Backseat" titletwo="Photo" />
                  </div>
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
                  <div className="veh-inspection-first_card">
                    <InspectionCard title="Exterior left" titletwo="Photo" />
                  </div>
                  <div className="veh-inspection-second_card">
                    <InspectionCard title="Exterior Right" titletwo="Photo" />
                  </div>
                </div>
                <div className="veh-inspection-cards_container">
                  <div className="veh-inspection-first_card">
                    <InspectionCard title="Exterior Front" titletwo="Clip" />
                  </div>
                  <div className="veh-inspection-second_card">
                    <InspectionCard title="Exterior Rear" titletwo="Clip" />
                  </div>
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
                  <div className="veh-inspection-first_card">
                    <InspectionCard title="Left Front Tire" titletwo="Clip" />
                  </div>
                  <div className="veh-inspection-second_card">
                    <InspectionCard title="Left Rear Tire" titletwo="Clip" />
                  </div>
                </div>
                <div className="veh-inspection-cards_container">
                  <div className="veh-inspection-first_card">
                    <InspectionCard title="Right Front Tire" titletwo="Clip" />
                  </div>
                  <div className="veh-inspection-second_card">
                    <InspectionCard title="Right Rear Tire" titletwo="Clip" />
                  </div>
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
    </MainContainer>
  );
};
export default VehicleInspectionScreen;
