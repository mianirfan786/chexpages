import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { RiArrowRightSLine } from 'react-icons/ri';
import { GrFormClose } from 'react-icons/gr';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { AiOutlineCar } from 'react-icons/ai';
import { Modal } from 'antd';
import './style.css';

const TabContentComponent = ({ title, draft, reviewed, inReview, item, showModal, setReInspectionId, setReInspectionModal, setReInspectionLisencePlateNumber }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const history = useHistory();

  const showModalLittle = () => {
    setIsModalVisible(true);
  };

  const handleOkLittle = () => {
    setIsModalVisible(false);
  };

  const handleCancelLittle = () => {
    setIsModalVisible(false);
  };

  const handleReInspectionId = (item) => {
    console.log("item ::: ", item);
    setReInspectionId(item?.id);
  }

  const handleVehicleDetails = (item) => {
    console.log("item ::: ", item);
    history.push(`/VehicleAfterReviewing/${item?.id}/${item?.vehicleId}`);
  }

  const handleCertificate = (item) => {
    console.log("item ::: ", item);
    history.push(`/LyftCertificate/${item?.id}/${item?.vehicleId}`);
  }

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
        reviewed === true ? (
          <>
            <div className="open-tab-container">
              <div className="open-tab-bg_color" onClick={() => { showModalLittle(); setReInspectionModal(false) }}>
                <div className="tab-content-container">
                  <div className="content-text">{title}</div>
                  <div className="arrow-icon-container">
                    <RiArrowRightSLine color="orange" size={30} />
                  </div>
                </div>
              </div>
            </div>
            <Modal style={{ width: '40px', height: '40px' }} title="Basic Modal" visible={isModalVisible} onOk={handleOkLittle} onCancel={() => { handleCancelLittle(); setReInspectionModal(false) }}>

              <div className="modal-content-container">
                <div></div>
                <div className="option-text">Options</div>
                <GrFormClose color="black" size={25} />
              </div>

              <div className="modal-links-container" onClick={() => { handleCertificate(item) }}>
                <IoDocumentTextOutline color="#1468BA" size={18} />
                <Link className="modal-links-text">Download Certificate</Link>
              </div>

              <div className="modal-links-container" onClick={() => { showModal(); handleCancelLittle(); setReInspectionModal(true); setReInspectionLisencePlateNumber(title); handleReInspectionId(item) }}>
                <AiOutlineCar color="#1468BA" size={18} />
                <Link href="#" className="modal-links-text">
                  Re-Inspect Car
                  </Link>
              </div>
              <div className="modal-links-container_noneborder" onClick={() => handleVehicleDetails(item)}>
                <AiOutlineCar color="#1468BA" size={18} />
                <Link className="modal-links-text">Car Details</Link>
              </div>
            </Modal>
          </>
        )
          :
          <>
            {inReview === true ?
              <div className="open-tab-container">
                <div className="open-tab-bg_color">
                  <div className="tab-content-container">
                    <div className="content-text">{title}</div>
                    <div className="arrow-icon-container">
                      <RiArrowRightSLine color="orange" size={30} />
                    </div>
                  </div>
                </div>
              </div>
              : null
            }
          </>
      }
    </div>
  );
};

export default TabContentComponent;
