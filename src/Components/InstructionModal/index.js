/* eslint-disable */

import React from 'react';
import { Modal } from 'antd';
import { Tabs } from 'antd';
// import { ClipLoader } from 'react-spinners';
import { IoMdClose } from 'react-icons/io';

import './style.css';
import '../../App.css';

const InstructionModal = ({ uploadingPercentage, isLoading, vehicleInstructionValues, isModalVisible, handleImageUpload, handleVideoUpload, handleModalClose }) => {
  const { TabPane } = Tabs;
  function callback(key) {
    console.log(key);
  }
  return (
    <div className="instruction-modal">
      {vehicleInstructionValues?.id ? vehicleInstructionValues?.id === "exterior_rear" ?
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
          closeIcon={
            vehicleInstructionValues?.type === 'Photo' ? (
              <IoMdClose color={'white'} size={22} className="cloes-icon-photo" />
            ) : (
              //video icon
              <IoMdClose color={'white'} size={22} className="cloes-icon" />
            )
          }
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
                <div style={{ color: 'white', marginTop: '20px' }}>{vehicleInstructionValues?.description}</div>
                <div style={{ marginBottom: '40px', marginTop: '40px' }}>
                  <div>
                    <Tabs defaultActiveKey="1" onChange={callback} centered>
                      <TabPane tab={<div className="instruction-tab-names" style={{ fontWeight: 'bold' }}>Individually</div>} key="1">
                        {vehicleInstructionValues?.type === 'Photo' ? (
                          <>
                            <img alt="" className="modal-image" src={vehicleInstructionValues?.image} />
                          </>
                        ) : (
                          <video preload="metadata" id="myVideo" autoPlay={false} width="100%" height="240" controls src={`${vehicleInstructionValues?.video}#t=0.5`}>
                            <source src={`${vehicleInstructionValues?.video}#t=0.5`} type="video/mp4" />
                          </video>
                        )}
                      </TabPane>
                      <TabPane tab={<div className="instruction-tab-names" style={{ fontWeight: 'bold' }}>With support</div>} key="2">
                        {vehicleInstructionValues?.type === 'Photo' ? (
                          <>
                            <img alt="" className="modal-image" src={vehicleInstructionValues?.image} />
                          </>
                        ) : (
                          <video preload="metadata" id="myVideo" autoPlay={false} width="100%" height="240" controls src={`${vehicleInstructionValues?.video2}#t=0.5`}>
                            <source src={`${vehicleInstructionValues?.video2}#t=0.5`} type="video/mp4" />
                          </video>
                        )}
                      </TabPane>
                    </Tabs>
                  </div>

                  <div style={{ paddingLeft: '18px' }} className="instruction-modal-step-container">
                    {vehicleInstructionValues?.steps.map((step, index) => (
                      <ul style={{ padding: 0, marginLeft: 10 }} key={index}>
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
        :
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
          closeIcon={
            vehicleInstructionValues?.type === 'Photo' ? (
              <IoMdClose color={'white'} size={22} className="cloes-icon-photo" />
            ) : (
              //video icon
              <IoMdClose color={'white'} size={22} className="cloes-icon" />
            )
          }
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
                <div style={{ color: 'white', marginTop: '20px' }}>{vehicleInstructionValues?.description}</div>
                <div style={{ marginBottom: '40px', marginTop: '0px' }}>
                  {vehicleInstructionValues?.type === 'Photo' ? (
                    <>
                      <img alt="" className="modal-image" src={vehicleInstructionValues?.image} />
                    </>
                  ) : (
                    <video preload="metadata" id="myVideo" autoPlay={false} width="100%" height="240" controls src={`${vehicleInstructionValues?.video}#t=0.5`}>
                      <source src={`${vehicleInstructionValues?.video}#t=0.5`} type="video/mp4" />
                    </video>
                  )}

                  <div style={{ paddingLeft: '18px' }} className="instruction-modal-step-container">
                    {vehicleInstructionValues?.steps.map((step, index) => (
                      <ul style={{ padding: 0, marginLeft: 10 }} key={index}>
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
        :
        null}
    </div>
  );
};

export default InstructionModal;
