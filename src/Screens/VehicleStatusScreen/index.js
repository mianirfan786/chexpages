/* eslint-disable */
import React from 'react';
import { Collapse, Row, Col } from 'antd';
import { UpCircleOutlined } from '@ant-design/icons';
import { ClipLoader } from 'react-spinners';
import Pdf from 'react-to-pdf';

import DownloadCertifcate from '../Certificates/DownLoadCertificate';
import GeneralCertificate from '../Certificates/GeneralCertificate';
import LyftCertificate from '../Certificates/Lyftcertificate';
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
  // MobileViewWarningContainer,
  // MobileViewWarning,
  // BoldSpan,
} from './style.js';
import './style.css';

const { Panel } = Collapse;
const refs = React.createRef();

const VehicleStatusScreen = ({ vehicleStatus, loading, setLoading, vehicleLoading, vehicleStatuss }) => {
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
                {vehicleStatuss === 'REVIEWED'
                  ? 'Use below link to download your certificate in PDF'
                  : 'Your vehicle is in review once your vehicle is reviewed you will get a notification and then you download certificate'}
              </VehicleInspectionP>
            </MainDownContainer>

            {/* <div className="veh-inspection-mobilepaddind">
              <MobileViewWarningContainer>
                <MobileViewWarning>
                  Please use <BoldSpan>mobile phone </BoldSpan>for optimal perfomance
                </MobileViewWarning>
              </MobileViewWarningContainer>
            </div> */}
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
                            <div className="veh-status-inspection-verification_text">{vehicle.name}</div>
                          </Col>
                          <Col></Col>
                          <Col></Col>
                        </Row>
                      }
                      key={index + 1}
                      extra={genExtra}
                    >
                      {vehicleStatuss === 'REVIEWED' ? (
                        <Pdf
                          targetRef={refs}
                          // options={options}
                          x={15.99}
                          // y={-7.5}
                          scale={0.55}
                          filename={`Report of Vehicle ${vehicle?.id}.pdf`}
                        >
                          {({ toPdf }) => (
                            <>
                              {vehicleLoading ? (
                                <div style={{ textAlign: 'center' }}>
                                  <ClipLoader color={'#246DB5'} size={40} />
                                </div>
                              ) : (
                                <NextStepButton onClickButton={toPdf} title="Download vehicle report" />
                              )}
                            </>
                          )}
                        </Pdf>
                      ) : (
                        'Vehicle is not yet Reviewed'
                      )}
                      {vehicle?.template_id == 1 ? (
                        <GeneralCertificate setLoading={setLoading} id={vehicle.id} refs={refs} />
                      ) : vehicle?.template_id == 2 ? (
                        <DownloadCertifcate setLoading={setLoading} id={vehicle.id} refs={refs} />
                      ) : vehicle?.template_id == 3 ? (
                        <LyftCertificate setLoading={setLoading} refs={refs} />
                      ) : null}
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
