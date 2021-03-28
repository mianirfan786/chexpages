import React from 'react';
import { Collapse, Row, Col } from 'antd';
import { UpCircleOutlined } from '@ant-design/icons';
import { ClipLoader } from 'react-spinners';
import Pdf from 'react-to-pdf';

import DownloadCertifcate from '../Certificates/DownLoadCertificate';

import {
  // InspectionCard,
  NextStepButton,
  Header,
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
const refs = React.createRef();

const VehicleStatusScreen = ({ vehicleStatus, loading }) => {
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
              <VehicleInspectionP>Your vehicle is in review once your vehicle is reviewed you will get a notification and then you download certificate</VehicleInspectionP>
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
              {loading ? (
                <div style={{ textAlign: 'center' }}>
                  <ClipLoader color={'#246DB5'} size={40} />
                </div>
              ) : (
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
                  {vehicleStatus?.map((vehicle, index) => (
                    <Panel
                      style={{ overflow: 'hidden' }}
                      header={
                        <Row gutter={40} style={{ overflow: 'hidden' }}>
                          <Col>
                            <div className="veh-inspection-verification_text">{vehicle.name}</div>
                          </Col>
                          <Col></Col>
                          <Col></Col>
                        </Row>
                      }
                      key={index + 1}
                      extra={genExtra}
                    >
                      <Pdf
                        targetRef={refs}
                        // options={options}
                        x={15.99}
                        // y={-7.5}
                        scale={0.55}
                        filename={`Report of Vehicle ${vehicle?.id}.pdf`}
                      >
                        {({ toPdf }) => <NextStepButton onClickButton={toPdf} title="Download vehicle report" />}
                      </Pdf>
                      <DownloadCertifcate id={vehicle.id} refs={refs} />
                    </Panel>
                  ))}
                </Collapse>
              )}
            </ContentFooterareaVehicleinspection>
          </MainDownContainer>
        </MainBgInsertDetails>
      </ImageBackgroundVehicleInspection>
    </MainContainer>
  );
};
export default VehicleStatusScreen;
