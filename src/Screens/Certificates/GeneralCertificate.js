/* eslint-disable */

import React, { useEffect } from 'react';
import qs from 'qs';
import { Col, Row } from 'antd';
import { ClipLoader } from 'react-spinners';
import moment from 'moment';
import { useLocation } from 'react-router-dom';
//@ts-ignore
import Pdf from 'react-to-pdf';
import { jwtTokenKey, s3Link } from '../../config';
import { useDispatch, useSelector } from 'react-redux';
import { getReportDataComplete } from '../../actions/VehicleAction';
import DownloadCertifcate from './DownloadCertificate.component';
import './style.css';
import { LeftCircleFilled } from '@ant-design/icons';

const refs = React.createRef();

const GeneralCertificate = (props) => {
  const reportData = useSelector((state) => state.vehicals.certificateData);
  const addVehicleLoading = useSelector((state) => state.vehicals.isAddVehicle);
  const { search } = useLocation();
  const dispatch = useDispatch();
  const { id } = qs.parse(search.replace('?', ''));
};

useEffect(() => {
  const getToken = () => localStorage.getItem(jwtTokenKey) || null;
  if (getToken) {
    dispatch(getReportDataComplete(id));
  } else {
    props.history.push('/login');
  }
}, []);
//@ts-ignore
return (
  <div className="container">
    <div className="content m-0 p-0 ">
      {addVehicleLoading ? (
        <div
          style={{
            height: '50vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ClipLoader size={50} color="#1A60A6" loading />
        </div>
      ) : (
        <>
          <Pdf
            targetRef={refs}
            // options={options}
            x={15.99}
            // y={-7.5}
            scale={0.55}
            filename={`Report of Vehicle ${reportData[0]?.id}.pdf`}
          >
            {({ toPdf }) => (
              <div className="p-3">
                <p
                  onClick={toPdf}
                  style={{
                    cursor: 'pointer',
                    color: 'blue',
                    display: 'inline',
                  }}
                >
                  <b>Download Pdf</b> <i className="fa fa-download" />
                </p>
              </div>
            )}
          </Pdf>
          <DownloadCertifcate id={id} refs={refs} />
          <div style={{ width: '100%', height: '100%' }}>
            <Row gutter={[20, 12]}>
              {props?.company === null ? (
                <Col span={24}>
                  <div className="w-100 d-flex-1 justify-content-center align-items-end ">
                    <h3 className="text-center">
                      <b>Vehicle Inspection</b>
                    </h3>
                  </div>
                </Col>
              ) : (
                <Col span={24} className="d-flex-1 justify-content-between" style={{ display: 'flex' }}>
                  <div style={{ width: '20%' }} />
                  <div className="w-100 d-flex-1 justify-content-center align-items-end">
                    <h3 className="text-center vechcleText">
                      <b>Vehicle Inspection</b>
                    </h3>
                  </div>
                  <div style={{ width: '115px', marginRight: '30px' }}>
                    <img style={{ width: '100%' }} src={`${s3Link}/${reportData && reportData[0]?.url}`} />
                  </div>
                </Col>
              )}
              <div className="w-100 p-2">
                <Row gutter={[20, 12]}>
                  <Col span={24} className="tobecompletedTextBgColor">
                    <p className="tobecompletedText">TO BE COMPLETED BY VEHICLE OPERATOR:</p>
                  </Col>

                  <Col span={24} className="report-user-data">
                    <Row gutter={10}>
                      <Col span={12}>
                        <div className="d-flex-1 flex-column">
                          <div style={{ borderBottom: '1px solid black' }}>
                            <p className="p-0 m-0">{`${reportData && reportData[0]?.name} ${reportData && reportData[0]?.last_name}`}</p>
                          </div>
                          <p>
                            <b>FULL NAME</b>
                          </p>
                        </div>
                      </Col>
                      <Col xs={24} md={12} span={12}>
                        <div className="d-flex-1 flex-column">
                          <div style={{ borderBottom: '1px solid black' }}>
                            <p className="p-0 m-0">{reportData && reportData[0]?.email}</p>
                          </div>
                          <p>
                            <b>EMAIL ADDRESS</b>
                          </p>
                        </div>
                      </Col>
                      <Col className="d-flex-1 align-items-end" xs={24} span={10} md={10}>
                        <div className="d-flex-1 flex-column w-100">
                          <div style={{ borderBottom: '1px solid black', height: '23px' }}>
                            <p style={{ color: 'white' }} className="p-0 m-0" />
                          </div>
                          <p>
                            <b>SIGNATURE</b>
                          </p>
                        </div>
                      </Col>
                      <Col className="ml-2 d-flex-1 align-items-end" xs={24} span={5} md={5}>
                        <div className="d-flex-1 flex-column w-100">
                          <div style={{ borderBottom: '1px solid black' }}>
                            <p className="p-0 m-0">{moment(new Date()).format('MM-DD-YYYY')}</p>
                          </div>
                          <p>
                            <b>DATE</b>
                          </p>
                        </div>
                      </Col>
                      <Col className="ml-2 d-flex-1 align-items-end" xs={24} md={8} span={8}>
                        <div />
                        <div className="d-flex-1 flex-column w-100">
                          <div style={{ borderBottom: '1px solid black' }}>
                            <p className="p-0 m-0">{reportData && reportData[0]?.phone}</p>
                          </div>
                          <p>
                            <b>PHONE NUMBER</b>
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Col>

                  <Col span={24}>
                    <div className="mt-3">
                      <h4>
                        <b>INSPECTION POINTS</b>
                      </h4>
                    </div>
                  </Col>
                  <Row style={{ padding: 22 }} gutter={20}>
                    {reportData &&
                      reportData.map((vehicleData) =>
                        vehicleData?.vehicleChecks.map((j) =>
                          j.displayOnCertificate ? (
                            <Col xs={24} md={12} span={12}>
                              <div>
                                <div className="d-flex-1 justify-content-end">
                                  <div style={{ width: '16%' }} className="d-flex-1 justify-content-between">
                                    <h6>Pass</h6>
                                    <h6>Fail</h6>
                                  </div>
                                </div>
                              </div>
                              <div className="d-flex-1 justify-content-between">
                                <label>{j.name}</label>
                                <div
                                  style={{
                                    width: '14%',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                  }}
                                  className="d-flex-1 justify-content-between"
                                >
                                  <label className="certificate-input-conatainer">
                                    <input type="checkbox" style={{ fontSize: '15px' }} checked={!!(j.status === 1 || j.status === true)} />
                                    <span className="checkmark"></span>
                                  </label>
                                  <label className="certificate-input-conatainer">
                                    <input
                                      type="checkbox"
                                      style={{
                                        fontSize: '15px',
                                        marginRight: '8px',
                                      }}
                                      checked={!!(j.status === 0 || j.status === false)}
                                    />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                            </Col>
                          ) : null
                        )
                      )}
                  </Row>

                  <Col xs={24} span={24}>
                    <div className="vechilebgColor">
                      <p className="text-center p-0 m-0 inspectorText">
                        <b>VEHICLE INSPECTION RESULTS</b> (Inspector To Circle)
                      </p>
                    </div>
                  </Col>
                  <Col xs={24} span={24}>
                    <div className="datebgcolorContaner ">
                      <p className="text-center fallText">
                        Any markings on the <b>'FAIL'</b> side will automatically fail inspection
                      </p>
                      <div className="d-flex-1 justify-content-center p-1 ">
                        <div className="d-flex-1 justify-content-between signature-data radiusContainer">
                          <div
                            className="d-flex-1 justify-content-center align-items-center"
                            style={
                              reportData && reportData[0]?.final_status === 'pass'
                                ? {
                                    border: '15px solid #FC6522',
                                    borderRadius: '100%',
                                    width: '145px',
                                    height: '135px',
                                  }
                                : null
                            }
                          >
                            <h3 className="p-0 m-0 passText">PASS</h3>
                          </div>
                          <div className="d-flex-1 justify-content-center align-items-center">
                            <div className="d-flex-1 flex-column">
                              <div
                                style={{
                                  borderBottom: '2px dashed #000000',
                                  width: ' 190px',
                                }}
                              >
                                <p className="p-0 m-0 dateColor">{moment(new Date()).format('MM-DD-YYYY')}</p>
                              </div>
                              <p className="inspectionText">Inspection Date</p>
                            </div>
                          </div>

                          <h3
                            style={
                              reportData && reportData[0]?.final_status === 'fail'
                                ? {
                                    border: '15px solid #FC6522',
                                    borderRadius: '100%',
                                    width: '133px',
                                    height: '100px',
                                  }
                                : null
                            }
                            className="p-0 m-0 failText"
                          >
                            FAIL
                          </h3>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Col xs={24} span={24}>
                  <div className="mt-6 tobecompletedbgColor">
                    <Row>
                      <Col span={24}>
                        <p className="tobecompletedText">TO BE COMPLETED BY INSPECTOR:</p>
                      </Col>
                      <Col className="d-flex-1 align-items-end" xs={24} md={5} span={5}>
                        <div className="d-flex-1 flex-column w-100">
                          <div style={{ borderBottom: '1px solid black' }}>
                            <p className="p-0 m-0">{reportData && reportData[0]?.vehicle_mileage}</p>
                          </div>
                          <p>
                            <b>VEHICLE MILAGE</b>
                          </p>
                        </div>
                      </Col>
                      <Col xs={24} md={4} span={4} className="ml-2 d-flex-1 align-items-end">
                        <div className="d-flex-1 flex-column w-100">
                          <div style={{ borderBottom: '1px solid black' }}>
                            <p className="p-0 m-0">{reportData && reportData[0]?.registration_state}</p>
                          </div>
                          <p>
                            <b>LICENSE PLATE STATE</b>
                          </p>
                        </div>
                      </Col>
                      <Col xs={24} md={6} span={6} className="ml-2 d-flex-1 align-items-end">
                        <div className="d-flex-1 flex-column w-100">
                          <div style={{ borderBottom: '1px solid black' }}>
                            <p className="p-0 m-0">{reportData && reportData[0]?.license_plate_no}</p>
                          </div>
                          <p>
                            <b>LICENSE PLATE NUMBER</b>
                          </p>
                        </div>
                      </Col>
                      <Col xs={24} md={8} span={8} className="ml-2 d-flex-1 align-items-end">
                        <div className="d-flex-1 flex-column w-100">
                          <div style={{ borderBottom: '1px solid black' }}>
                            <p className="p-0 m-0">{reportData && reportData[0]?.vin}</p>
                          </div>
                          <p>
                            <b>VIN</b>
                          </p>
                        </div>
                      </Col>
                      <Col xs={24} md={7} span={7} className="d-flex-1 align-items-end mt-4">
                        <div className="d-flex-1 flex-column w-100">
                          <div style={{ borderBottom: '1px solid black' }}>
                            <p className="p-0 m-0">{reportData && reportData[0]?.make}</p>
                          </div>
                          <p>
                            <b>VEHICLE NAME</b>
                          </p>
                        </div>
                      </Col>
                      <Col xs={24} span={7} md={7} className="ml-2 d-flex-1 align-items-end mt-4">
                        <div className="d-flex-1 flex-column w-100">
                          <div style={{ borderBottom: '1px solid black' }}>
                            <p className="p-0 m-0">{reportData && reportData[0]?.model}</p>
                          </div>
                          <p>
                            <b>VEHICLE MODEL</b>
                          </p>
                        </div>
                      </Col>
                      <Col xs={24} span={4} md={4} className="ml-2 d-flex-1 align-items-end mt-4">
                        <div className="d-flex-1 flex-column w-100">
                          <div style={{ borderBottom: '1px solid black' }}>
                            <p className="p-0 m-0">{reportData && reportData[0]?.year}</p>
                          </div>
                          <p>
                            <b>VEHICLE YEAR</b>
                          </p>
                        </div>
                      </Col>
                      <Col xs={24} span={5} md={5} className="ml-2 d-flex-1 align-items-end mt-4">
                        <div className="d-flex-1 flex-column w-100">
                          <div style={{ borderBottom: '1px solid black' }}>
                            <p className="p-0 m-0">{reportData && reportData[0]?.vehicleDoors}</p>
                          </div>
                          <p>
                            <b>NUMBER OF DOORS</b>
                          </p>
                        </div>
                      </Col>
                      <Col xs={24} md={6} span={6} className="d-flex-1 align-items-end mt-4">
                        <div className="d-flex-1 flex-column w-100">
                          <div style={{ borderBottom: '1px solid black' }}>
                            <p className="p-0 m-0">CHEX.AI</p>
                          </div>
                          <p>
                            <b>INSPECTOR COMPANY</b>
                          </p>
                        </div>
                      </Col>
                      <Col xs={24} span={17} md={17} className="ml-2 d-flex-1 align-items-end mt-4">
                        <div className="d-flex-1 flex-column w-100">
                          <div style={{ borderBottom: '1px solid black' }}>
                            <p className="p-0 m-0">1383 SAN MANTEO AVE. SOUTH SAN FRANCISCO. CA 94080</p>
                          </div>
                          <p>
                            <b>INSPECTOR ADDRESS</b>
                          </p>
                        </div>
                      </Col>
                      <Row gutter={[12, 12]} align="bottom" style={{ width: '100%', margin: '-24px -6px 6px' }}>
                        <Col xs={24} md={8} className="d-flex-1 align-items-end mt-4">
                          <div className="d-flex-1 flex-column w-100">
                            <div style={{ borderBottom: '1px solid black' }}>
                              <p className="p-0 m-0">{`${reportData && reportData[0]?.reviewName} ${reportData && reportData[0]?.reviewLast}`}</p>
                            </div>
                            <p>
                              <b>INSPECTOR NAME</b>
                            </p>
                          </div>
                        </Col>
                        <Col
                          xs={24}
                          // span={10}
                          md={8}
                          className="d-flex-1 align-items-end"
                        >
                          <div className="d-flex-1 flex-column w-100">
                            <div style={{ borderBottom: '1px solid black' }}>
                              <p className="p-0 m-0">
                                {reportData && reportData[0]?.reviewSignature ? (
                                  <img style={{ width: '200px', height: '100%' }} src={reportData && reportData[0]?.reviewSignature} />
                                ) : (
                                  `${reportData && reportData[0]?.reviewName} ${reportData && reportData[0]?.reviewLast}`
                                )}
                              </p>
                            </div>
                            <p>
                              <b>INSPECTOR SIGNATURE</b>
                            </p>
                          </div>
                        </Col>
                        <Col xs={24} md={8} className=" d-flex-1 align-items-end mt-4">
                          <div className="d-flex-1 flex-column w-100">
                            <div style={{ borderBottom: '1px solid black' }}>
                              <p className="p-0 m-0">27646</p>
                            </div>
                            <p>
                              <b>STATE CERTIFICATION NUMBER</b>
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </Row>
                  </div>
                </Col>
              </div>
            </Row>
          </div>
        </>
      )}
    </div>
  </div>
);

export default GeneralCertificate;
