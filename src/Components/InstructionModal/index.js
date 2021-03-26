import React from 'react';
import { Modal } from 'antd';
import { ClipLoader } from 'react-spinners';

import './style.css';
import '../../App.css';

const InstructionModal = ({ isLoading, vehicleInstructionValues, isModalVisible, handleImageUpload, handleVideoUpload }) => {
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
        <div style={{ color: 'white' }}>{vehicleInstructionValues?.description}</div>
        <div style={{ marginBottom: '100px' }}>
          {vehicleInstructionValues?.type === 'Photo' ? (
            <img alt="" style={{ width: '335px', height: '220px' }} src={vehicleInstructionValues?.image} />
          ) : (
            <video width="320" height="240" controls src={vehicleInstructionValues?.video} />
          )}
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
              <div className="button-wrapper">{isLoading ? <ClipLoader color={'white'} size={20} /> : 'Next'}</div>
            </label>
            {vehicleInstructionValues?.type === 'Photo' ? (
              <input type="file" id="file-input" accept="image/*" capture onChange={(event) => handleImageUpload(event)} />
            ) : (
              <input type="file" id="file-input" accept="video/*" capture onChange={(event) => handleVideoUpload(event)} />
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default InstructionModal;
