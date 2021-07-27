import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiArrowRightSLine } from 'react-icons/ri';
import { GrFormClose } from 'react-icons/gr';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { AiOutlineCar } from 'react-icons/ai';
import { Modal } from 'antd';
import './style.css';

const TabContentComponent = ({ title, draft, item }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleRedirect = (item) => {
    window.location.href = `/vehicleinspection/${item?.id}/${item?.vehicleId}`;
  }
  return (
    <div>
      {draft === true ?
        <div onClick={() => handleRedirect(item)} className="open-tab-container">
          <div className="open-tab-bg_color">
            <div className="tab-content-container">
              <div className="content-text">{title}</div>
              <div className="arrow-icon-container">
                <RiArrowRightSLine color="orange" size={30} />
              </div>
            </div>
          </div>
        </div>

        :
        <>
          <div className="open-tab-container">
            <div className="open-tab-bg_color" onClick={showModal}>
              <div className="tab-content-container">
                <div className="content-text">{title}</div>
                <div className="arrow-icon-container">
                  <RiArrowRightSLine color="orange" size={30} />
                </div>
              </div>
            </div>
          </div>
          <Modal style={{ width: '40px', height: '40px' }} title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <div className="modal-content-container">
              <div></div>
              <div className="option-text">Options</div>
              <GrFormClose color="black" size={25} />
            </div>
            <div className="modal-links-container">
              <IoDocumentTextOutline color="#1468BA" size={18} />
              <Link className="modal-links-text">Download Certificate</Link>
            </div>
            <div className="modal-links-container">
              <AiOutlineCar color="#1468BA" size={18} />
              <Link href="#" className="modal-links-text">
                Re-Inspect Car
          </Link>
            </div>
            <div className="modal-links-container_noneborder">
              <AiOutlineCar color="#1468BA" size={18} />
              <Link className="modal-links-text">Car Details</Link>
            </div>
          </Modal>
        </>
      }
    </div>
  );
};

export default TabContentComponent;
