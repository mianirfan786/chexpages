/* eslint-disable */

import React, { useEffect } from 'react';
import { Col, Row } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
//@ts-ignore
import ActionCreators from '../../actions';
import signature from '../../Assets/signature.png';
import './styles.css';

const DownloadCertifcate = (props) => {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const getToken = () => localStorage.getItem('token') || null;
    if (getToken) {
      props.getVehicleCertificate({ id: user?.vehicles[0]?.id, company_id: props.id }, props.setLoading);
    } else {
      localStorage.removeItem('currentUser');
      localStorage.removeItem('token');
      localStorage.removeItem('vehicleData');
      window.location.reload('/login');
    }
  }, []);
  return (
    <div style={{ zIndex: '-1', background: 'transparent' }} className="container">
      <div className="content m-0 p-0 ">
        <>
          <div style={{ width: '1200px', position: 'absolute', left: '-10000000px', overflow: 'hidden' }} ref={props.refs}>
            <Row gutter={[20, 12]}>
              {props.company === null ? (
                <Col span={24}>
                  <div className="w-100 d-flex-1 justify-content-center align-items-end ">
                    <h3 className="text-center">
                      <b>Vehicle Inspection</b>
                    </h3>
                  </div>
                </Col>
              ) : (
                <Col span={24} className="d-flex-1 justify-content-between" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ width: '20%' }} />
                  <div className="w-100 d-flex-1 justify-content-center align-items-end">
                    <h3 className="text-center vechcleText">
                      <b>Vehicle Inspection</b>
                    </h3>
                  </div>
                  <div style={{ width: '115px', marginRight: '30px' }}>
                    <img
                      crossOrigin="anonymous"
                      style={{ width: '85%' }}
                      src={`${process.env.REACT_APP_AWS_S3_LINK}/${props.reportData && props.reportData[0]?.url}?x-request=xhr`}
                    />
                  </div>
                </Col>
              )}
              <div style={{ marginLeft: '40px' }} className="w-100 p-2">
                <Row gutter={[20, 12]}>
                  <Col span={24} className="tobecompletedTextBgColor">
                    <p className="tobecompletedText">TO BE COMPLETED BY VEHICLE OPERATOR:</p>
                  </Col>
                  <Col span={24}>
                    <Row gutter={10}>
                      <Col span={12}>
                        <div className="d-flex-1 flex-column">
                          <div style={{ borderBottom: '1px solid black' }}>
                            <p style={{ color: 'black' }} className="p-0 m-0">{`${props.reportData && props.reportData[0]?.name}
                            
                            `}</p>
                          </div>
                          <p>
                            <b>FULL NAME</b>
                          </p>
                        </div>
                      </Col>
                      <Col span={12}>
                        <div className="d-flex-1 flex-column">
                          <div style={{ borderBottom: '1px solid black' }}>
                            <p className="p-0 m-0">{props.reportData && props.reportData[0]?.email}</p>
                          </div>
                          <p>
                            <b>EMAIL ADDRESS</b>
                          </p>
                        </div>
                      </Col>
                      <Col className="d-flex-1 align-items-end" span={10}>
                        <div className="d-flex-1 flex-column w-100">
                          <div style={{ borderBottom: '1px solid black', height: '23px' }}>
                            <p style={{ color: 'white' }} className="p-0 m-0" />
                          </div>
                          <p>
                            <b>SIGNATURE</b>
                          </p>
                        </div>
                      </Col>
                      <Col className="ml-2 d-flex-1 align-items-end" span={5}>
                        <div className="d-flex-1 flex-column w-100">
                          <div style={{ borderBottom: '1px solid black' }}>
                            <p className="p-0 m-0">{moment(new Date(props.reportData && props.reportData[0]?.VehicleUpdatedAt)).format('MM-DD-YYYY')}</p>
                          </div>
                          <p>
                            <b>DATE</b>
                          </p>
                        </div>
                      </Col>
                      <Col className="ml-2 d-flex-1 align-items-end" span={8}>
                        <div />
                        <div className="d-flex-1 flex-column w-100">
                          <div style={{ borderBottom: '1px solid black' }}>
                            <p className="p-0 m-0">{props.reportData && props.reportData[0]?.phone}</p>
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
                    {props.reportData &&
                      props.reportData?.map((vehicleData) =>
                        vehicleData?.vehicleChecks.map((j) =>
                          j.displayOnCertificate ? (
                            <Col span={12}>
                              <div>
                                <div className="d-flex-1 justify-content-end" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                                  <div
                                    style={{ width: '16%' }}
                                    className="d-flex-1 justify-content-between"
                                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                                  >
                                    <h6>Pass</h6>
                                    <h6 style={{ paddingRight: '16px' }}>Fail</h6>
                                  </div>
                                </div>
                              </div>
                              <div className="d-flex-1 justify-content-between" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <label>{j.name}</label>
                                <div
                                  style={{
                                    width: '14%',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                  }}
                                  className="d-flex-1 justify-content-between"
                                >
                                  <input type="checkbox" style={{ fontSize: '15px' }} checked={!!(j.status === 1 || j.status === true)} />

                                  <input
                                    type="checkbox"
                                    style={{
                                      fontSize: '15px',
                                      marginRight: '8px',
                                    }}
                                    checked={!!(j.status === 0 || j.status === false)}
                                  />
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
                      <div className="d-flex-1 justify-content-center">
                        <div className="d-flex-1 justify-content-between signature-data radiusContainer">
                          <div
                            className="d-flex-1 justify-content-center align-items-center"
                            style={
                              props.reportData && props.reportData[0]?.final_status === 'pass'
                                ? {
                                    border: '12px solid #FC6522',
                                    borderRadius: '100%',
                                    width: '118px',
                                    height: '115px',
                                  }
                                : null
                            }
                          >
                            <h5 className="p-0 m-0 passText passText">PASS</h5>
                          </div>
                          <div className="d-flex-1 justify-content-center align-items-center">
                            <div className="d-flex-1 flex-column">
                              <div style={{ borderBottom: '2px dashed #000000', width: ' 190px' }}>
                                <p className="p-0 m-0 dateColor">{moment(new Date()).format('MM-DD-YYYY')}</p>
                              </div>
                              <p className="inspectionText">INSPECTION DATE</p>
                            </div>
                          </div>
                          <h5
                            style={
                              props.reportData && props.reportData[0]?.final_status === 'fail'
                                ? {
                                    border: '12px solid #FC6522',
                                    borderRadius: '100%',
                                    width: '108px',
                                    height: '104px',
                                  }
                                : null
                            }
                            className="p-0 m-0 failText"
                          >
                            FAIL
                          </h5>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Col xs={24} span={24}>
                  <div className="mt-6  tobecompletedbgColor">
                    <Row>
                      <Col span={24}>
                        <p className="tobecompletedText">TO BE COMPLETED BY INSPECTOR:</p>
                      </Col>
                      <Col className="d-flex-1 align-items-end" span={5}>
                        <div className="d-flex-1 flex-column w-100">
                          <div style={{ borderBottom: '1px solid black' }}>
                            {props.reportData && props.reportData[0]?.vehicle_mileage ? (
                              <p className="p-0 m-0">{props.reportData && props.reportData[0]?.vehicle_mileage}</p>
                            ) : (
                              <p style={{ color: 'white' }} className="p-0 m-0">
                                Empty
                              </p>
                            )}
                          </div>
                          <p>
                            <b>VEHICLE MILAGE</b>
                          </p>
                        </div>
                      </Col>
                      <Col span={4} className="ml-2 d-flex-1 align-items-end">
                        <div className="d-flex-1 flex-column w-100">
                          <div style={{ borderBottom: '1px solid black' }}>
                            {props.reportData && props.reportData[0]?.registration_state ? (
                              <p className="p-0 m-0">{props.reportData && props.reportData[0]?.registration_state}</p>
                            ) : (
                              <p style={{ color: 'white' }} className="p-0 m-0">
                                Empty
                              </p>
                            )}
                          </div>
                          <p>
                            <b>LICENSE PLATE STATE</b>
                          </p>
                        </div>
                      </Col>
                      <Col span={6} className="ml-2 d-flex-1 align-items-end">
                        <div className="d-flex-1 flex-column w-100">
                          <div style={{ borderBottom: '1px solid black' }}>
                            {props.reportData && props.reportData[0]?.license_plate_no ? (
                              <p className="p-0 m-0">{props.reportData && props.reportData[0]?.license_plate_no}</p>
                            ) : (
                              <p style={{ color: 'white' }} className="p-0 m-0">
                                Empty
                              </p>
                            )}
                          </div>
                          <p>
                            <b>LICENSE PLATE NUMBER</b>
                          </p>
                        </div>
                      </Col>
                      <Col span={8} className="ml-2 d-flex-1 align-items-end">
                        <div className="d-flex-1 flex-column w-100">
                          <div style={{ borderBottom: '1px solid black' }}>
                            {props.reportData && props.reportData[0]?.vin ? (
                              <p className="p-0 m-0">{props.reportData && props.reportData[0]?.vin}</p>
                            ) : (
                              <p style={{ color: 'white' }} className="p-0 m-0">
                                Empty
                              </p>
                            )}
                          </div>
                          <p>
                            <b>VIN</b>
                          </p>
                        </div>
                      </Col>
                      <Col span={7} className="d-flex-1 align-items-end mt-4">
                        <div className="d-flex-1 flex-column w-100">
                          <div style={{ borderBottom: '1px solid black' }}>
                            {props.reportData && props.reportData[0]?.make ? (
                              <p className="p-0 m-0">{props.reportData && props.reportData[0]?.make}</p>
                            ) : (
                              <p style={{ color: 'white' }} className="p-0 m-0">
                                Empty
                              </p>
                            )}
                          </div>
                          <p>
                            <b>VEHICLE NAME</b>
                          </p>
                        </div>
                      </Col>
                      <Col span={7} className="ml-2 d-flex-1 align-items-end mt-4">
                        <div className="d-flex-1 flex-column w-100">
                          <div style={{ borderBottom: '1px solid black' }}>
                            {props.reportData && props.reportData[0]?.model ? (
                              <p className="p-0 m-0">{props.reportData && props.reportData[0]?.model}</p>
                            ) : (
                              <p style={{ color: 'white' }} className="p-0 m-0">
                                Empty
                              </p>
                            )}
                          </div>
                          <p>
                            <b>VEHICLE MODEL</b>
                          </p>
                        </div>
                      </Col>
                      <Col span={4} className="ml-2 d-flex-1 align-items-end mt-4">
                        <div className="d-flex-1 flex-column w-100">
                          <div style={{ borderBottom: '1px solid black' }}>
                            {props.reportData && props.reportData[0]?.year ? (
                              <p className="p-0 m-0">{props.reportData && props.reportData[0]?.year}</p>
                            ) : (
                              <p style={{ color: 'white' }} className="p-0 m-0">
                                Empty
                              </p>
                            )}
                          </div>
                          <p>
                            <b>VEHICLE YEAR</b>
                          </p>
                        </div>
                      </Col>
                      <Col span={5} className="ml-2 d-flex-1 align-items-end mt-4">
                        <div className="d-flex-1 flex-column w-100">
                          <div style={{ borderBottom: '1px solid black' }}>
                            {props.reportData && props.reportData[0]?.vehicleDoors ? (
                              <p className="p-0 m-0">{props.reportData && props.reportData[0]?.vehicleDoors}</p>
                            ) : (
                              <p style={{ color: 'white' }} className="p-0 m-0">
                                Empty
                              </p>
                            )}
                          </div>
                          <p>
                            <b>NUMBER OF DOORS</b>
                          </p>
                        </div>
                      </Col>
                      <Col span={6} className="d-flex-1 align-items-end mt-4">
                        <div className="d-flex-1 flex-column w-100">
                          <div style={{ borderBottom: '1px solid black' }}>
                            <p className="p-0 m-0">CHEX.AI</p>
                          </div>
                          <p>
                            <b>INSPECTOR COMPANY</b>
                          </p>
                        </div>
                      </Col>
                      <Col span={17} className="ml-2 d-flex-1 align-items-end mt-4">
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
                        <Col span={8} className="d-flex-1 align-items-end mt-4">
                          <div className="d-flex-1 flex-column w-100">
                            <div style={{ borderBottom: '1px solid black' }}>
                              <p className="p-0 m-0">{`${props.reportData && props.reportData[0]?.reviewName} ${props.reportData && props.reportData[0]?.reviewLast}`}</p>
                            </div>
                            <p>
                              <b>INSPECTOR NAME</b>
                            </p>
                          </div>
                        </Col>
                        <Col
                          // span={10}
                          span={8}
                          className="d-flex-1 align-items-end"
                        >
                          <div className="d-flex-1 flex-column w-100">
                            <div style={{ borderBottom: '1px solid black' }}>
                              <p className="p-0 m-0">
                                {props.reportData && props.reportData[0]?.reviewSignature ? (
                                  <img
                                    style={{ width: '200px' }}
                                    src={signature}
                                    // {props.reportData && props.reportData[0]?.reviewSignature}
                                  />
                                ) : (
                                  `${props.reportData && props.reportData[0]?.reviewName} ${props.reportData && props.reportData[0]?.reviewLast}`
                                )}
                              </p>
                            </div>
                            <p>
                              <b>INSPECTOR SIGNATURE</b>
                            </p>
                          </div>
                        </Col>
                        <Col span={8} className=" d-flex-1 align-items-end mt-4">
                          <div className="d-flex-1 flex-column w-100">
                            <div style={{ borderBottom: '1px solid black' }}>
                              <p className="p-0 m-0">217646</p>
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
        {/* )
        } */}
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  console.log(state);
  return {
    reportData: state.vehicleInstruction.vehicleCertificate,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DownloadCertifcate);
