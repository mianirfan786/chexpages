/* eslint-disable */

import React from 'react';
import { Row, Col, Checkbox } from 'antd';
import LyftImg from '../..//Assets/liftimg.png';
import './LyftCertificate.css';

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

const LyftCertificate = (props) => {
  return (
    <div ref={props.ref} className="container lyft-container">
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
          <Col span={12}>
            <div className="lyft-driver-name_input">
              <p className="label-text">lyft driver name</p>
              <p className="demi-text">Demi Text</p>
            </div>
          </Col>
          <Col span={12}>
            <div className="form-chexbox-container">
              <Checkbox className="form-checkbox" onChange={onChange}>
                APPLICANT
              </Checkbox>
              <Checkbox className="form-checkbox" onChange={onChange}>
                CURRENT LYFT DRIVER
              </Checkbox>
            </div>
          </Col>
        </Row>

        <Row gutter={[8, 8]}>
          <Col span={12}>
            <div className="phone-num_input">
              <p className="label-text">Phone number</p>
              <p className="demi-text">Demi Text</p>
            </div>
          </Col>
          <Col span={12}>
            <div className="email_input">
              <p className="label-text">email</p>
              <p className="demi-text">Demi Text</p>
            </div>
          </Col>
        </Row>
        <Row gutter={[8, 8]}>
          <Col span={6}>
            <div className="vehicle-year-input">
              <p className="label-text">vehicle year</p>
              <p className="demi-text">Demi Text</p>
            </div>
          </Col>
          <Col span={6}>
            <div className="vehicle-make-input">
              <p className="label-text">vehicle make</p>
              <p className="demi-text">Demi Text</p>
            </div>
          </Col>
          <Col span={12}>
            <div className="vehicle-model-input">
              <p className="label-text">vehicle model</p>
              <p className="demi-text">Demi Text</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <div className="license-plate-input">
              <p className="label-text">license plate #</p>
              <p className="demi-text">Demi Text</p>
            </div>
          </Col>
          <Col span={12}>
            <div className="vin-input">
              <p className="demi-text">Demi Text</p>
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
            <p className="foot-brakes-text">
              <span className="numeric-text">1. </span>Foot brakes
            </p>
            <p className="foot-brakes-text">
              <span className="numeric-text">2. </span>Emergency brake (parking brake)
            </p>
            <p className="foot-brakes-text">
              <span className="numeric-text">3. </span>Steering mechanism
            </p>
            <p className="foot-brakes-text">
              <span className="numeric-text">4. </span>Windshield
            </p>
            <p className="foot-brakes-text">
              <span className="numeric-text">5. </span>Rear window and other glass
            </p>
            <p className="foot-brakes-text">
              <span className="numeric-text">6. </span>Windshield wipers
            </p>
            <p className="foot-brakes-text">
              <span className="numeric-text">7. </span>Headlights
            </p>

            <p className="foot-brakes-text">
              <span className="numeric-text">8. </span>Tail lights
            </p>
            <p className="foot-brakes-text">
              <span className="numeric-text">9. </span>Turn indicator lights
            </p>
            <p className="foot-brakes-text">
              <span className="numeric-text">10. </span>Stop lights
            </p>
            <p className="foot-brakes-text">
              <span className="numeric-text">11. </span>Front seat adjustment
            </p>
            <p className="foot-brakes-text">
              <span className="numeric-text">12. </span>Doors
            </p>
          </Col>
          <Col span={2}>
            <p className="pass-text">PASS</p>
            <div className="vehicle-inspection_chexbox">
              <Checkbox onChange={onChange} />
            </div>
            <div className="vehicle-inspection_chexbox">
              <Checkbox onChange={onChange} />
            </div>
            <div className="vehicle-inspection_chexbox">
              <Checkbox onChange={onChange} />
            </div>
            <div className="vehicle-inspection_chexbox">
              <Checkbox onChange={onChange} />
            </div>
            <div className="vehicle-inspection_chexbox">
              <Checkbox onChange={onChange} />
            </div>
            <div className="vehicle-inspection_chexbox">
              <Checkbox onChange={onChange} />
            </div>
            <div className="vehicle-inspection_chexbox">
              <Checkbox onChange={onChange} />
            </div>
            <div className="vehicle-inspection_chexbox">
              <Checkbox onChange={onChange} />
            </div>
            <div className="vehicle-inspection_chexbox">
              <Checkbox onChange={onChange} />
            </div>
            <div className="vehicle-inspection_chexbox">
              <Checkbox onChange={onChange} />
            </div>
            <div className="vehicle-inspection_chexbox">
              <Checkbox onChange={onChange} />
            </div>
            <div className="vehicle-inspection_chexbox">
              <Checkbox onChange={onChange} />
            </div>
          </Col>
          <Col span={2}>
            <p className="fail-text">FAIl</p>
            <div className="vehicle-inspection_chexboxtwo">
              <Checkbox onChange={onChange} />
            </div>
            <div className="vehicle-inspection_chexboxtwo">
              <Checkbox onChange={onChange} />
            </div>
            <div className="vehicle-inspection_chexboxtwo">
              <Checkbox onChange={onChange} />
            </div>
            <div className="vehicle-inspection_chexboxtwo">
              <Checkbox onChange={onChange} />
            </div>
            <div className="vehicle-inspection_chexboxtwo">
              <Checkbox onChange={onChange} />
            </div>
            <div className="vehicle-inspection_chexboxtwo">
              <Checkbox onChange={onChange} />
            </div>
            <div className="vehicle-inspection_chexboxtwo">
              <Checkbox onChange={onChange} />
            </div>
            <div className="vehicle-inspection_chexboxtwo">
              <Checkbox onChange={onChange} />
            </div>
            <div className="vehicle-inspection_chexboxtwo">
              <Checkbox onChange={onChange} />
            </div>
            <div className="vehicle-inspection_chexboxtwo">
              <Checkbox onChange={onChange} />
            </div>
            <div className="vehicle-inspection_chexboxtwo">
              <Checkbox onChange={onChange} />
            </div>
            <div className="vehicle-inspection_chexboxtwo">
              <Checkbox onChange={onChange} />
            </div>
          </Col>

          <Col span={8}>
            <p className="inspector-point-text">INSPECTOR POINT</p>
            <p className="foot-brakes-text">
              <span className="numeric-text">13. </span>Horn
            </p>
            <p className="foot-brakes-text">
              <span className="numeric-text">14. </span>Speedometer
            </p>
            <p className="foot-brakes-text">
              <span className="numeric-text">15. </span>Bumpers
            </p>
            <p className="foot-brakes-text">
              <span className="numeric-text">16. </span>Muffler and exhaust system
            </p>
            <p className="foot-brakes-text">
              <span className="numeric-text">17. </span>Tires, incl, tread depth
            </p>
            <p className="foot-brakes-text">
              <span className="numeric-text">18. </span>Interior and exterior rearview mirrors
            </p>
            <p className="foot-brakes-text">
              <span className="numeric-text">19. </span>Safety belts for driver passenger(s)
            </p>

            <div className="doted-border-box">
              <Col span={16}>
                <p className="vehicle-text">Vehicle Inspection</p>
                <p className="circle-one-text">(Please circle one)</p>
              </Col>
              <Col span={4}>
                <p className="box-pass-text">PASS</p>
              </Col>
              <Col span={4}>
                <p className="box-fail-text">FAIL</p>
              </Col>
            </div>
          </Col>

          <Col span={2}>
            <p className="pass-text">PASS</p>
            <div className="vehicle-inspection_chexbox">
              <Checkbox onChange={onChange} />
            </div>
            <div className="vehicle-inspection_chexbox">
              <Checkbox onChange={onChange} />
            </div>
            <div className="vehicle-inspection_chexbox">
              <Checkbox onChange={onChange} />
            </div>
            <div className="vehicle-inspection_chexbox">
              <Checkbox onChange={onChange} />
            </div>
            <div className="vehicle-inspection_chexbox">
              <Checkbox onChange={onChange} />
            </div>
            <div className="vehicle-inspection_chexbox">
              <Checkbox onChange={onChange} />
            </div>
            <div className="vehicle-inspection_chexbox">
              <Checkbox onChange={onChange} />
            </div>
          </Col>

          <Col span={2}>
            <p className="fail-text">FAIl</p>
            <div className="vehicle-inspection_chexboxtwo">
              <Checkbox onChange={onChange} />
            </div>
            <div className="vehicle-inspection_chexboxtwo">
              <Checkbox onChange={onChange} />
            </div>
            <div className="vehicle-inspection_chexboxtwo">
              <Checkbox onChange={onChange} />
            </div>
            <div className="vehicle-inspection_chexboxtwo">
              <Checkbox onChange={onChange} />
            </div>
            <div className="vehicle-inspection_chexboxtwo">
              <Checkbox onChange={onChange} />
            </div>
            <div className="vehicle-inspection_chexboxtwo">
              <Checkbox onChange={onChange} />
            </div>
            <div className="vehicle-inspection_chexboxtwo">
              <Checkbox onChange={onChange} />
            </div>
          </Col>
        </Row>
        <div className="completed-inspector-main_container">
          <Row>
            <Col span={24}>
              <p className="completed-by-inspector_text">to be completed by inspector or lyft expert</p>
            </Col>
            <Col xs={4} span={4}>
              <p className="id-verified">ID VERIFIED</p>
            </Col>
            <Col xs={4} span={4}>
              <div className="yes-circle">
                <p className="yes-text">YES</p>
              </div>
            </Col>
            <Col xs={4} span={4}>
              <p className="no-text">NO</p>
            </Col>
            <Col span={12}>
              <div className="inspector-only-input">
                <p className="demi-text">Demi Text</p>
              </div>
              <p className="applicant-text">applicant`s driver`s license #</p>
            </Col>
          </Row>
        </div>
        <div className="inspector-only-form">
          <Row>
            <Col lg={24} lg={12}>
              <div className="inspector-only-container">
                <p className="inspector-only-text">to be completed by inspector only</p>
                <p className="fields-mandatory-text">[all fields are mandatory]</p>
              </div>
            </Col>
            <Col lg={24} lg={12}>
              <p className="inspection-date-text">inspection date</p>
              <p className="document-expires-text">(document expires one year from this date) 14/4/2021</p>
            </Col>
            <Col span={12}>
              <div className="inspector-only-input">
                <p className="demi-text">Demi Text</p>
              </div>
              <p className="applicant-text">Company name</p>
            </Col>
            <Col span={12}>
              <div className="inspector-only-input">
                <p className="demi-text">Demi Text</p>
              </div>
              <p className="applicant-text">vehicle mileage from odometer</p>
            </Col>
            <Col span={12}>
              <div className="inspector-only-input">
                <p className="demi-text">Demi Text</p>
              </div>
              <p className="applicant-text">Company address</p>
            </Col>
            <Col span={12}>
              <div className="inspector-only-input">
                <p className="demi-text">Demi Text</p>
              </div>
              <p className="applicant-text">inspector name</p>
            </Col>
            <Col span={12}>
              <div className="inspector-only-input">
                <p className="demi-text">Demi Text</p>
              </div>
              <p className="applicant-text">ard number</p>
            </Col>
            <Col span={12}>
              <div className="inspector-only-input">
                <p className="demi-text">Demi Text</p>
              </div>
              <p className="applicant-text">inspector signature</p>
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

export default LyftCertificate;
