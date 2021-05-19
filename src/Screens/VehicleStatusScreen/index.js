/* eslint-disable */
import React, { useRef } from 'react';
import { Collapse, Row, Col } from 'antd';
import { UpCircleOutlined } from '@ant-design/icons';
import { ClipLoader } from 'react-spinners';
import Pdf from 'react-to-pdf';

import DownloadCertifcate from '../Certificates/DownLoadCertificate';
import GeneralCertificate from '../Certificates/GeneralCertificate';
import UberCertificate from '../Certificates/UberCertificate';
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
// const refs = React.createRef();

const VehicleStatusScreen = ({ panelValue, handleSetPanelValue, vehicleStatus, loading, setLoading, vehicleLoading, vehicleStatuss }) => {
  const refs = useRef();
  const ref1 = useRef();
  const ref2 = useRef();
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
                  : 'Your vehicle is currently under review. Once your vehicle inspection is complete, we will notify you via email. Thank you for your patience.'}
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
                  defaultActiveKey={[`1`]}
                  // onChange={(key) => {
                  //   var value = key?.slice(-1);
                  //   handleSetPanelValue(value[0]);
                  // }}
                  // activeKey={[`${panelValue}`]}
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
                      {/* {vehicleStatuss === 'REVIEWED' ? (
                        <Pdf
                          targetRef={vehicle?.template_id == 1 ? refs : vehicle?.template_id == 3 ? ref2 : ref1}
                          // options={options}
                          x={15.99}
                          // y={-7.5}
                          scale={0.55}
                          // onComplete={() => {
                          //   window.location.reload();
                          // }}
                          filename={`Report of Vehicle ${vehicle?.id}.pdf`}
                        >
                          {({ toPdf }) => (
                            <>
                              {vehicleLoading ? (
                                <div style={{ textAlign: 'center' }}>
                                  <ClipLoader color={'#246DB5'} size={40} />
                                </div>
                              ) : vehicle?.template_id == 3 || vehicle?.template_id == 2 || vehicle.name === 'Uber' || vehicle.name === 'uber' ? null : (
                                <NextStepButton onClickButton={toPdf} title="Download vehicle report" />
                              )}
                            </>
                          )}
                        </Pdf>
                      ) : (
                        'Vehicle is not yet Reviewed'
                      )} */}

                      {vehicleStatuss === 'REVIEWED' ? (
                        // vehicle?.template_id == 1 ? (
                        //   <>
                        //     <GeneralCertificate setLoading={setLoading} id={vehicle.id} refs={refs} />
                        //   </>
                        // ) :
                        vehicle?.template_id == 2 ? (
                          <>
                            {/* <div>Please check your email for certificates.</div> */}
                            <DownloadCertifcate setLoading={setLoading} id={vehicle.id} />
                          </>
                        ) : vehicle?.template_id == 3 ? (
                          // <div>Please check your email for lyft certificates.</div>
                          <LyftCertificate setLoading={setLoading} id={vehicle?.id} />
                        ) : // <LyftCertificate setLoading={setLoading} id={vehicle?.id} refs={ref2} />
                        vehicle.name === 'Uber' || vehicle.name === 'uber' ? (
                          <UberCertificate setLoading={setLoading} id={vehicle.id} />
                        ) : (
                          <DownloadCertifcate setLoading={setLoading} id={vehicle.id} />
                        )
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
