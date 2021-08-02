import React from 'react';
import { HiCamera } from 'react-icons/hi';
import { BiCheck } from 'react-icons/bi';
import { IoIosClose } from 'react-icons/io';

import { Modal } from 'antd';

import './style.css';

import AfterReviewingHeaderComponent from '../../Components/AfterReviewingHeaderComponent';
import AfterReviewingScreenProductCardComponent from '../../Components/AfterReviewingScreenProductCardComponent';

const VehicleAfterReviewingScreen = ({ vehicleDetails, loading, filesDetails, handleModal, handleModalClose, isModalVisible, url, type }) => {

  return (
    <div className="after-reviewing-main_container">
      <Modal
        visible={isModalVisible}
        title={false}
        style={{ width: '100%' }}
        wrapClassName="instruction-modalls"
        footer={null}
        className="after-review-in-screen"
        onCancel={handleModalClose}
        mask={true}
        // closeIcon={false}
        maskStyle={{ backgroundColor: '#266FB7' }}
        bodyStyle={{
          width: '100%',
          textAlign: 'center',
          // background: 'linear-gradient(182.55deg, #1876CC -17.67%, #051532 115.19%), #191A1B',
        }}
      >
        {type === 'video' ?
          <video preload="metadata" controls autoPlay={false} className="produc-card-bg_file">
            <source src={url} type="video/mp4" />
          </video>
          :
          <div>
            <img className="img_container" alt="" src={url} />
            <HiCamera color="#97A9C5" size={20} className="camera_img_container" />
          </div>
        }

      </Modal>
      <div className="container">
        <div className="after-reviewing-content-main_container">
          <AfterReviewingHeaderComponent />
          <div className="after-reviewing-white_container">
            <div className="after-reviewing-wrap_container">
              {filesDetails?.map((item) => {
                return (
                  <AfterReviewingScreenProductCardComponent handleModal={handleModal} handleModalClose={handleModalClose} item={item} />
                );
              })}
            </div>
            <div className="border-align-container">
              <div className="after-reviewing-bottom_border" />
            </div>
            {vehicleDetails?.vehicle?.UserVehicles?.vehicleDoors ?
              <div className="no-of-door_container">
                <div className="no-of-door_text">No of Doors : {vehicleDetails?.vehicle?.UserVehicles?.vehicleDoors}</div>
              </div>
              : null
            }
            <textarea className="text-area-container" type="textarea" placeholder="Discription" />
            {vehicleDetails?.finalStatus ? vehicleDetails?.finalStatus === true ?
              <>
                <div className="final-status-container">
                  <div className="final-status-text">Final Status</div>
                  <div className="pass-container">
                    <div className="checked-icon-container">
                      <BiCheck color="white" size={16} />
                    </div>
                    <div className="pass-text">Pass</div>
                  </div>
                </div>
              </>
              :
              vehicleDetails?.finalStatus === false ?
                <>
                  <div className="final-status-container">
                    <div className="final-status-text">Final Status</div>
                    <div className="pass-container">
                      <div className="Unchecked-icon-container">
                        <IoIosClose color="white" size={20} />
                      </div>
                      <div className="pass-text">Fail</div>
                    </div>
                  </div>
                </>
                : null : null}

          </div>
        </div>
      </div>
    </div>
  );
};
export default VehicleAfterReviewingScreen;
