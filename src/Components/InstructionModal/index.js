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
        mask={true}
        // closeIcon={false}

        maskClosable={isLoading ? false : true}
        // closeIcon={<IoMdClose color={'black'} size={22} />}
        maskStyle={{ backgroundColor: '#266FB7' }}
        bodyStyle={{
          width: '100%',
          textAlign: 'center',
          // background: 'linear-gradient(182.55deg, #1876CC -17.67%, #051532 115.19%), #191A1B',
        }}
      >
        <div
          style={{
            width: '100%',
            background: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100%',
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
                  <video preload="metadata" id="myVideo" autoPlay={false} className="modal-video" controls>
                    <source src={`${process.env.REACT_APP_AWS_S3_LINK}/${vehicleInstructionValues?.url}#t=0.5`} type="video/mp4" />
                  </video>
                </div>
              </>
            )
          ) : (
            <>
              <div style={{ fontSize: '26px', color: 'white', marginTop: '50px' }}>{vehicleInstructionValues?.title}</div>
              <div style={{ color: 'white' }}>{vehicleInstructionValues?.description}</div>
              <div style={{ marginBottom: '60px', marginTop: '60px' }}>
                {vehicleInstructionValues?.type === 'Photo' ? (
                  <>
                    <img alt="" className="modal-image" src={vehicleInstructionValues?.image} />
                  </>
                ) : (
                  <video preload="metadata" id="myVideo" autoPlay={false} width="320" height="240" controls src={`${vehicleInstructionValues?.video}#t=0.5`}>
                    <source src={`${vehicleInstructionValues?.video}#t=0.5`} type="video/mp4" />
                  </video>
                )}
                <div className="instruction-modal-step-container">
                  {vehicleInstructionValues?.steps.map((step, index) => (
                    <ul style={{ listStyle: 'none', padding: 0 }} key={index}>
                      <li>
                        <div className="instruction-modal-step">{step}</div>
                      </li>
                    </ul>
                  ))}
                </div>
              </div>
              <div className="input-img-container">
                <div className="image-upload">
                  {vehicleInstructionValues?.type === 'Photo' ? (
                    <>
                      <label htmlFor="file-input-photo">
                        <div className="button-wrapper">
                          {isLoading
                            ? parseInt(uploadingPercentage) == 0 || uploadingPercentage == 0
                              ? '0%'
                              : parseInt(uploadingPercentage) == 100
                              ? 'Finalizing upload'
                              : `${parseInt(uploadingPercentage)}%`
                            : 'Next'}
                        </div>
                      </label>
                      <input disabled={isLoading ? true : false} type="file" id="file-input-photo" accept="image/*" capture onChange={handleImageUpload} />
                    </>
                  ) : (
                    <>
                      <label htmlFor="file-input-video">
                        <div className="button-wrapper">
                          {isLoading
                            ? parseInt(uploadingPercentage) == 0 || uploadingPercentage == 0
                              ? '0%'
                              : parseInt(uploadingPercentage) == 100
                              ? 'Finalizing upload'
                              : `${parseInt(uploadingPercentage)}%`
                            : 'Next'}
                        </div>
                      </label>
                      <input disabled={isLoading ? true : false} type="file" id="file-input-video" accept="video/*" capture onChange={handleVideoUpload} />
                    </>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default InstructionModal;