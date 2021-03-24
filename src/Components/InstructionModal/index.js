import React from 'react';
import { Modal } from 'antd';

import horn from '../../Assets/horn.png';
import './style.css';
import '../../App.css';

const InstructionModal = ({ vehicleInstructionValues, isModalVisible, handleImageUpload }) => {
  return (
    <div className="instruction-modal">
      <Modal
        visible={isModalVisible}
        closable={false}
        title={false}
        style={{ width: '100%' }}
        footer={null}
        bodyStyle={{
          width: '100%',
          // height: '100vh',
          textAlign: 'center',
          background: 'linear-gradient(0deg,rgba(27,104,179,0.6) 0%,#1b68b3 99.97%)',
        }}
      >
        <div style={{ marginBottom: '116px', fontSize: '26px', color: 'white' }}>{vehicleInstructionValues?.title}</div>
        <div>{vehicleInstructionValues?.description}</div>
        <div style={{ marginBottom: '100px' }}>
          <img alt="" style={{ width: '335px', height: '220px' }} src={horn} />
          <div style={{ color: 'white' }}>
            {vehicleInstructionValues?.steps.map((step, index) => (
              <ul key={index}>
                <li className="instruction-modal-step">{step}</li>
              </ul>
            ))}
          </div>
        </div>

        <div className="input-img-container">
          <div className="image-upload">
            <label htmlFor="file-input">
              <div className="button-wrapper">Next</div>
            </label>
            <input type="file" id="file-input" accept="image/*" onChange={(event) => handleImageUpload(event)} />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default InstructionModal;
