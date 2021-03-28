import React from 'react';
import { Modal } from 'antd';
import { ClipLoader } from 'react-spinners';
import { IoMdClose } from 'react-icons/io';

import './style.css';
import '../../App.css';

const InstructionModal = ({ isLoading, vehicleInstructionValues, isModalVisible, handleImageUpload, handleVideoUpload, handleModalClose }) => {
  return (
    <div className="instruction-modal">
      <Modal
        visible={isModalVisible}
        closable={isLoading ? false : true}
        title={false}
        style={{ width: '100%' }}
        footer={null}
        onCancel={handleModalClose}
        maskClosable={isLoading ? false : true}
        closeIcon={<IoMdClose size={22} />}
        bodyStyle={{
          width: '100%',
          textAlign: 'center',
          background: 'linear-gradient(0deg,rgba(27,104,179,0.6) 0%,#1b68b3 99.97%)',
        }}
      >
        {vehicleInstructionValues?.url ? (
          vehicleInstructionValues?.type === 'Photo' ? (
            <>
              <div className="modal-images">
                <img alt="" className="modal-inside-image" src={`${process.env.REACT_APP_AWS_S3_LINK}/${vehicleInstructionValues?.url}`} />
              </div>
            </>
          ) : (
            <>
              <video style={{ width: '100%', marginTop: '30px' }} controls src={`${process.env.REACT_APP_AWS_S3_LINK}/${vehicleInstructionValues?.url}`} />
            </>
          )
        ) : (
          <>
            <div style={{ fontSize: '26px', color: 'white' }}>{vehicleInstructionValues?.title}</div>
            <div style={{ color: 'white' }}>{vehicleInstructionValues?.description}</div>
            <div style={{ marginBottom: '10px' }}>
              {vehicleInstructionValues?.type === 'Photo' ? (
                <img alt="" className="modal-image" src={vehicleInstructionValues?.image} />
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
                {vehicleInstructionValues?.type === 'Photo' ? (
                  <>
                    <label htmlFor="file-input-photo">
                      <div disabled={isLoading ? true : false} className="button-wrapper">
                        {isLoading ? <ClipLoader color={'white'} size={20} /> : 'Next'}
                      </div>
                    </label>
                    <input type="file" id="file-input-photo" accept="image/*" capture onChange={handleImageUpload} />
                  </>
                ) : (
                  <>
                    <label htmlFor="file-input-video">
                      <div disabled={isLoading ? true : false} className="button-wrapper">
                        {isLoading ? <ClipLoader color={'white'} size={20} /> : 'Next'}
                      </div>
                    </label>
                    <input type="file" id="file-input-video" accept="video/*" capture onChange={handleVideoUpload} />
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
};

export default InstructionModal;
