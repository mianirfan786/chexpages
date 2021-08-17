/* eslint-disable */

import React, { useEffect } from 'react';
import { Col, Row } from 'antd';
import { ClipLoader } from 'react-spinners';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ActionCreators from '../../actions';


import './styleCertificate.css';

const GeneralCertificate = (props) => {
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
    <div style={{ zIndex: '-1', background: 'transparent' }} className="container">
      <div style={{ width: '1200px', position: 'absolute', left: '-100000px', overflow: 'hidden' }} ref={props.refs}>
        <Row gutter={[20, 12]}>
          <Col span={24}>
            <div className="d-flex-1 align-items-center flex-column">
              <img src="https://res.cloudinary.com/tech-qalanders/image/upload/v1617977143/chex-instruction/chex-ai-logo_hg6t5p.png" />
              <div>
                <p className="text-center">
                  <b>1383 SAN MANTEO AVE. SOUTH SAN FRANCISCO, CA 94080</b>
                </p>
                <p className="text-center">
                  <b>ARD # 217646</b>
                </p>
                <h3 className="text-center fontFamily">
                  <b>INSPECTION CHECKLIST</b>
                </h3>
              </div>
            </div>
          </Col>
          <div className="w-100 p-5">
            <Row gutter={[20, 12]}>
              {props.reportData &&
                props.reportData?.map((i, index) =>
                  i?.vehicleChecks.map((j, index1) => (
                    <Col span={12}>
                      <div key={index}>
                        <div className="d-flex-1 justify-content-between fontFamily">
                          <div>
                            <h5 className="d-inline-block" style={{ borderBottom: '1px solid black' }}>
                              {j.category}
                            </h5>
                          </div>
                          <div style={{ width: '18%' }} className="d-flex-1 justify-content-between">
                            <h6>Pass</h6>
                            <h6>Fail</h6>
                          </div>
                        </div>
                        <div className="d-flex-1 justify-content-between" key={index1}>
                          <label>{j.name}</label>
                          <div style={{ width: '16%' }} className="d-flex-1 justify-content-between">
                            <label className="certificate-input-conatainer">
                              <input type="checkbox" style={{ fontSize: '15px' }} checked={j.status === 1 || j.status === true ? true : false} />
                              <span className="checkmark"></span>
                            </label>
                            <label className="certificate-input-conatainer">
                              <input type="checkbox" style={{ fontSize: '15px' }} checked={j.status === 0 || j.status === false ? true : false} />
                              <span className="checkmark"></span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </Col>
                  ))
                )}
            </Row>
            <Col span={24}>
              <div>
                <h4 className="d-inline fontFamily" style={{ borderBottom: '1px solid black' }}>
                  INSPECTION RESULTS:
                </h4>
                <div className="d-flex-1 justify-content-between p-3 fontFamily">
                  <h5>
                    VEHICLE MILAGE: <b>{props.reportData && props.reportData[0]?.vehicle_mileage}</b>
                  </h5>
                  <h5>
                    LICENSE PLATE#: <b>{props.reportData && props.reportData[0]?.license_plate_no}</b>
                  </h5>
                  <h5>
                    VIN#: <b>{props.reportData && props.reportData[0]?.vin}</b>
                  </h5>
                </div>
                <div className="d-flex-1 justify-content-between p-3 fontFamily">
                  <h5>
                    VEHICLE MAKE: <b>{props.reportData && props.reportData[0]?.make}</b>
                  </h5>
                  <h5>
                    VEHICLE MODEL#: <b>{props.reportData && props.reportData[0]?.model}</b>
                  </h5>
                  <h5>
                    VEHICLE YEAR: <b>{props.reportData && props.reportData[0]?.year}</b>
                  </h5>
                </div>
              </div>
            </Col>
          </div>
        </Row>
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    reportData: state.vehicleInstruction.vehicleCertificate,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GeneralCertificate);
