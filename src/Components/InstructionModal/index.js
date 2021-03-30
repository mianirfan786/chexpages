/* eslint-disable */

import React from 'react';
import { Modal } from 'antd';
// import { ClipLoader } from 'react-spinners';
import { IoMdClose } from 'react-icons/io';

import './style.css';
import '../../App.css';

const InstructionModal = ({ uploadingPercentage, isLoading, vehicleInstructionValues, isModalVisible, handleImageUpload, handleVideoUpload, handleModalClose }) => {
  return (
    <div className="instruction-modal">
      <Modal
        visible={isModalVisible}
        closable={isLoading ? false : true}
        title={false}
        style={{ width: '100%' }}
        wrapClassName="instruction-modalls"
        footer={null}
        onCancel={handleModalClose}
      
        maskClosable={isLoading ? false : true}
        closeIcon={<IoMdClose color={'black'} size={22} />}
        maskStyle={{ backgroundColor: '#266FB7' }}
        bodyStyle={{
          width: '100%',
          textAlign: 'center',
          background: '#266FB7',
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
              <div className="video-container">
                <video id="myVideo" autoPlay={false} className="modal-video" controls src={`${process.env.REACT_APP_AWS_S3_LINK}/${vehicleInstructionValues?.url}`}>
                  video is too large to load
                </video>
              </div>
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
                <video id="myVideo" autoPlay={false} width="320" height="240" controls src={vehicleInstructionValues?.video}>
                  video is too large to load
                </video>
              )}
              <div style={{ color: 'white', width: '60%', margin: 'auto' }}>
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
                      <div className="button-wrapper">{isLoading ? (parseInt(uploadingPercentage) == 0 ? '0%' : `${parseInt(uploadingPercentage)}%`) : 'Next'}</div>
                    </label>
                    <input disabled={isLoading ? true : false} type="file" id="file-input-photo" accept="image/*" capture onChange={handleImageUpload} />
                  </>
                ) : (
                  <>
                    <label htmlFor="file-input-video">
                      <div className="button-wrapper">{isLoading ? (parseInt(uploadingPercentage) == 0 ? '0%' : `${parseInt(uploadingPercentage)}%`) : 'Next'}</div>
                    </label>
                    <input disabled={isLoading ? true : false} type="file" id="file-input-video" accept="video/*" capture onChange={handleVideoUpload} />
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
