import React from 'react';
import { Collapse, Row, Col, Typography, Button } from 'antd';
import { UpCircleOutlined } from '@ant-design/icons';

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
              <ContentVehicleInspectionH1>
                CHEX
                <ContentVehicleInspectionH1Span>.AI</ContentVehicleInspectionH1Span>
              </ContentVehicleInspectionH1>
              <VehicleInspectionArrowBack>
                {/* <OpenNavSpan type="button" onClick={() => setShowSidebar(true)}>
                  &#9776;
                </OpenNavSpan> */}
              </VehicleInspectionArrowBack>
            </HeaderItem>

            <VehicleInspectionP>Please complete below items to finish vehicle inspection</VehicleInspectionP>
            <MobileViewWarningContainer>
              <MobileViewWarning>
                Please use <BoldSpan>mobile phone </BoldSpan>for optimal perfomance
              </MobileViewWarning>
            </MobileViewWarningContainer>
          </ContentVehicleInspection>
          <VehicleDetailBtnContainer>{/* <VehicalDetailButton onClick={showVehicleDetails}>
        Vehicle Detail
      </VehicalDetailButton> */}</VehicleDetailBtnContainer>
        </MainBgInsertDetails>

        <MainDownContainer>
          <ContentFooterareaVehicleinspection>
            <Collapse
              defaultActiveKey={['1']}
              expandIconPosition="right"
              expandIcon={({ isActive }) => (
                <UpCircleOutlined style={isActive ? { fontSize: 28, color: '#FF7A00' } : { fontSize: 28, color: 'lightGray' }} rotate={isActive ? 180 : 0} />
              )}
            >
              <Panel
                style={{ overflow: 'hidden' }}
                header={
                  <Row gutter={40} style={{ overflow: 'hidden' }}>
                    <Col>
                      <div>Car verification item</div>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                  </Row>
                }
                key="1"
                extra={genExtra}
              ></Panel>
              <Panel
                style={{ overflow: 'hidden' }}
                header={
                  <Row gutter={40} style={{ overflow: 'hidden' }}>
                    <Col>
                      <div>Car verification item</div>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                  </Row>
                }
                key="2"
                extra={genExtra}
              ></Panel>
              <Panel
                style={{ overflow: 'hidden' }}
                header={
                  <Row gutter={40} style={{ overflow: 'hidden' }}>
                    <Col>
                      <div>Car verification item</div>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                  </Row>
                }
                key="3"
                extra={genExtra}
              ></Panel>
              <Panel
                style={{ overflow: 'hidden' }}
                header={
                  <Row gutter={40} style={{ overflow: 'hidden' }}>
                    <Col>
                      <div>Car verification item</div>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                  </Row>
                }
                key="4"
                extra={genExtra}
              ></Panel>
            </Collapse>
          </ContentFooterareaVehicleinspection>
        </MainDownContainer>
      </ImageBackgroundVehicleInspection>
    </MainContainer>
  );
};
export default VehicleInspectionScreen;
