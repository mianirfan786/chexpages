/* eslint-disable */

import React, { useEffect } from 'react';
import { ClipLoader } from 'react-spinners';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col, Checkbox } from 'antd';
import moment from 'moment';
import ActionCreators from '../../actions';
import { setLyftReportData } from '../../utils/functions';

import LyftImg from '../..//Assets/liftimg.png';
import './LyftCertificate.css';

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

const LyftCertificate = (props) => {
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const getToken = () => localStorage.getItem('token') || null;
    if (getToken) {
      props.getVehicleCertificate({ id: user?.vehicles[0]?.id, company_id: props.id }, props.setLoading);
    } else {
      props.history.push('/login');
    }
  }, []);

  return (
    <div style={{ position: 'absolute', left: '100%', width: '1200px' }} ref={props.refs} className="container lyft-container">
      <div className="lyft-top-header_container">
        <Row>
          <Col span={14}>
            <img alt=" " className="lift-image" src={LyftImg} />
          </Col>
          <Col span={10}>
            <p className="caloiforniya-text">California Vehicle Inspection</p>
          </Col>
        </Row>
      </div>
      <div className="lyft-driver-info_form_container">
        <Row>
          <Col span={24}>
            <div className="lyft-driver-tetxs_container">
              <p className="lyft-driver-info_text">LYFT DRIVER INFO</p>
              <p className="mandatory-text">[ALL FIELDS ARE MANDATORY]</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div className="lyft-driver-name_input">
              <p className="label-text">lyft driver name</p>
              <p className="demi-text-one">{props.reportData && props.reportData[0].name}</p>
            </div>
          </Col>
          {/* <Col span={12}>
            <div className="form-chexbox-container">
              <label style={{ display: 'flex' }}>
                <input
                  className="form-checkbox-fixone"
                  type="checkbox"
                  checked={props.reportData && props.reportData[0]?.lyft_user ? true : false}
                />
                APPLICANT
              </label>
              <label style={{ display: 'flex' }}>
                <input
                  className="form-checkbox-fix"
                  type="checkbox"
                  checked={props.reportData && props.reportData[0]?.lyft_user ? false : true}
                />
                CURRENT LYFT DRIVER
              </label>
            </div>
          </Col> */}
        </Row>

        <Row gutter={[8, 8]}>
          <Col span={24}>
            <div className="phone-num_input">
              <p className="label-text">Phone number</p>
              <p className="demi-text-one">{props.reportData && props.reportData[0].phone}</p>
            </div>
          </Col>
        </Row>
        <Row gutter={[8, 8]}>
          <Col span={7}>
            <div className="vehicle-year-input">
              <p className="label-text">vehicle year</p>
              <p className="demi-text-two">{props.reportData && props.reportData[0].year}</p>
            </div>
          </Col>
          <Col span={7}>
            <div className="vehicle-make-input">
              <p className="label-text">vehicle make</p>
              <p className="demi-text-three">{props.reportData && props.reportData[0].make}</p>
            </div>
          </Col>
          <Col span={10}>
            <div className="vehicle-model-input">
              <p className="label-text">vehicle model</p>
              <p className="demi-text-three">{props.reportData && props.reportData[0].model}</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <div className="license-plate-input">
              <p className="label-text">license plate #</p>
              <p className="demi-text-three">{props.reportData && props.reportData[0].license_plate_no}</p>
            </div>
          </Col>
          <Col span={12}>
            <div className="vin-input">
              <p className="demi-text-four">
                {props.reportData &&
                  props.reportData[0].vin.split('').map((char, index) => (
                    <>
                      {index == 0 ? <span>|</span> : null}
                      <span className="border-right-Container">{char}</span>
                      <span>|</span>
                    </>
                  ))}
              </p>
            </div>
            <p className="vin-text">VIN</p>
          </Col>
        </Row>
      </div>
      <div className="vehicle-inspection-main_container">
        <Row>
          <Col span={24}>
            <div className="vehicle-inspection-heading_container">
              <p className="vehicle-inspection-heading">VEHICLE INSPECTION</p>
              <p className="inspector-text">[TO BE COMPLETED BY INSPECTOR]</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <p className="inspector-point-text">INSPECTOR POINT</p>
            {props?.checksData.map((check, index) =>
              index <= 14 ? (
                <p className="foot-brakes-text">
                  <span className="numeric-text">{index + 1}. </span>
                  {check.name}
                </p>
              ) : null
            )}
          </Col>
          <Col span={2}>
            <p className="pass-text">PASS</p>
            {props?.checksData.map((check, index) =>
              index <= 14 ? (
                check.status === true || check.status === 1 ? (
                  <div className="vehicle-inspection_chexbox">
                    <label className="custom-chexbox-container">
                      <input type="checkbox" checked={true} />
                      <span className="checked-checkbox"></span>
                    </label>
                  </div>
                ) : (
                  <div className="vehicle-inspection_chexbox">
                    <label className="custom-chexbox-container">
                      <input type="checkbox" checked={false} />
                      <span className="checked-checkbox"></span>
                    </label>
                  </div>
                )
              ) : null
            )}
          </Col>
          <Col span={2}>
            <p className="fail-text">FAIL</p>
            {props?.checksData.map((check, index) =>
              index <= 14 ? (
                check.status === false || check.status === 0 ? (
                  <div className="vehicle-inspection_chexboxtwo">
                    <label className="custom-chexbox-container">
                      <input type="checkbox" checked={true} />
                      <span className="checked-checkbox"></span>
                    </label>
                  </div>
                ) : (
                  <div className="vehicle-inspection_chexboxtwo">
                    <label className="custom-chexbox-container">
                      <input type="checkbox" checked={false} />
                      <span className="checked-checkbox"></span>
                    </label>
                  </div>
                )
              ) : null
            )}
          </Col>

          <Col span={8}>
            <p className="inspector-point-text">INSPECTOR POINT</p>
            {console.log("props?.checksData", props?.checksData)}
            {props?.checksData.map((check, index) =>
              
              index > 14 ? (
                <p className="foot-brakes-text">
                  <span className="numeric-text">{index + 1}. </span>
                  {check.name}
                </p>
              ) : null
            )}
            <div className="doted-border-box">
              <Col span={16}>
                <p className="vehicle-text">Vehicle Inspection</p>
                <p className="circle-one-text">(Please circle one)</p>
              </Col>
              <Col span={4}>
                <div style={{ marginLeft: '-21px' }} className={props.reportData && props.reportData[0].final_status === 'pass' ? 'pass-circle' : ''}>
                  <p style={{ marginRight: '20px', marginLeft: '20px' }} className="box-fail-text">
                    PASS
                  </p>
                </div>
              </Col>
              <Col span={4}>
                <div className={props.reportData && props.reportData[0].final_status === 'fail' ? 'pass-circle' : ''}>
                  <p className="box-fail-text">FAIL</p>
                </div>
              </Col>
            </div>
          </Col>

          <Col span={2}>
            <p className="pass-text">PASS</p>
            {props?.checksData.map((check, index) =>
              index > 14 ? (
                check.status === true || check.status === 1 ?  (
                  <div className="vehicle-inspection_chexbox">
                    <label className="custom-chexbox-container">
                      <input type="checkbox" checked={true} />
                      <span className="checked-checkbox"></span>
                    </label>
                  </div>
                ) : (
                  <div className="vehicle-inspection_chexbox">
                    <label className="custom-chexbox-container">
                      <input type="checkbox" checked={false} />
                      <span className="checked-checkbox"></span>
                    </label>
                  </div>
                )
              ) : null
            )}
          </Col>

          <Col span={2}>
            <p className="fail-text">FAIL</p>
            {props?.checksData.map((check, index) =>
              index > 14 ? (
                check.status === false || check.status === 0 ? (
                  <div className="vehicle-inspection_chexboxtwo">
                    <label className="custom-chexbox-container">
                      <input type="checkbox" checked={true} />
                      <span className="checked-checkbox"></span>
                    </label>
                  </div>
                ) : (
                  <div className="vehicle-inspection_chexboxtwo">
                    <label className="custom-chexbox-container">
                      <input type="checkbox" checked={false} />
                      <span className="checked-checkbox"></span>
                    </label>
                  </div>
                )
              ) : null
            )}
          </Col>
        </Row>
        {/* <div className="completed-inspector-main_container">
          <Row>
            <Col span={24}>
              <p className="completed-by-inspector_text">
                to be completed by inspector or lyft expert
              </p>
            </Col>
            <Col xs={4} span={4}>
              <p className="id-verified">ID VERIFIED</p>
            </Col>
            {props.reportData &&
              props.reportData.map(
                (checks) =>
                  checks &&
                  checks.vehicleChecks.map((value) =>
                    value.category === 'verification_card' ? (
                      value.status === true ? (
                        <>
                          <Col xs={4} span={4}>
                            <div className="yes-circle">
                              <p className="yes-text">YES</p>
                            </div>
                          </Col>
                          <Col xs={4} span={4}>
                            <p className="no-text">NO</p>
                          </Col>
                        </>
                      ) : (
                        <>
                          <Col xs={4} span={4}>
                            <p className="yes-text">YES</p>
                          </Col>
                          <Col xs={4} span={4}>
                            <div className="yes-circle">
                              <p className="no-text">NO</p>
                            </div>
                          </Col>
                        </>
                      )
                    ) : null
                  )
              )}
            <Col span={12}>
              <div className="inspector-only-input">
                <p className="demi-text">
                  {props.reportData && props.reportData[0].driving_license}
                </p>
              </div>
              <p className="applicant-text">applicant`s driver`s license #</p>
            </Col>
          </Row>
        </div> */}
        <div className="inspector-only-form">
          <Row>
            <Col lg={24} lg={12}>
              <div className="inspector-only-container">
                <p className="inspector-only-text">to be completed by inspector only</p>
                <p className="fields-mandatory-text">[all fields are mandatory]</p>
              </div>
            </Col>
            <Col lg={24} lg={12}>
              <p className="inspection-date-text">inspection date: {moment(new Date(props.reportData && props.reportData[0]?.VehicleUpdatedAt)).format('MM/DD/YYYY')}</p>
              <p className="document-expires-text">(document expires one year from this date) </p>
            </Col>
            <Col span={12}>
              <div className="inspector-only-input">
                <p className="demi-text">Chex.AI</p>
              </div>
              <p className="applicant-text">COMPANY NAME</p>
            </Col>
            <Col span={12}>
              <div className="inspector-only-input">
                <p className="demi-text">{props.reportData && props.reportData[0].vehicle_mileage}</p>
              </div>
              <p className="applicant-text">VEHICLE MILEAGE FROM ODOMETER</p>
            </Col>
            <Col span={12}>
              <div className="inspector-only-input">
                <p className="demi-text-address">1383 SAN MATEO AVE. SOUTH SAN FRANCISCO. CA 94080</p>
              </div>
              <p className="applicant-text">Company address</p>
            </Col>
            <Col span={12}>
              <div className="inspector-only-input">
                <p className="demi-text">{props.reportData && props.reportData[0].reviewName}</p>
              </div>
              <p className="applicant-text">INSPECTOR NAME</p>
            </Col>
            <Col span={12}>
              <div className="margin-top-container" style={{ height: '130px' }}>
                <div className="inspector-only-input">
                  <p className="demi-text">217646</p>
                </div>
                <p className="applicant-text">ard number</p>
              </div>
            </Col>

            <Col span={12}>
              <div className="inspector-only-input">
                <p className="demi-text">
                  <img style={{ marginBottom: '5px' }} width="170px" height="130px" src={props.reportData && props.reportData[0].reviewSignature} />
                </p>
              </div>
              <p className="applicant-text">INSPECTOR SIGNATURE</p>
            </Col>
          </Row>
        </div>
        <Row>
          <Col span="24">
            <p className="bottom-paragraph">
              Applicants who do not match the photo on their driver’s license or do not have the proper documents, cannot complete an inspection. Failing inspections can only be
              remedied by the same shop on the same day. If an applicant fails the inspection and is unable to fix the issues on the spot, a new appointment must be made, and a new
              inspection form must be used.
            </p>
          </Col>
          <Col span="24">
            <p className="bottom-paragraph">
              This inspection form reflects a 19 point inspection only on the date of the inspection listed above. For purposes of this inspection, the wheels were not removed from
              the vehicle, and the vehicle was not put on a lift, nor was it checked for emissions.
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  console.log('Lyft Certification dtsate', state);
  return {
    reportData: state.vehicleInstruction.vehicleCertificate,
    checksData: setLyftReportData(state.vehicleInstruction.vehicleCertificate),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LyftCertificate);
