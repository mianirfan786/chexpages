import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { RiArrowRightSLine } from 'react-icons/ri';
import { GrFormClose } from 'react-icons/gr';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { AiOutlineCar } from 'react-icons/ai';

import { Modal } from 'antd';
import './style.css';

import DownloadCertifcate from '../../Screens/Certificates/DownLoadCertificate';
import Lyftcertificate from '../../Screens/Certificates/Lyftcertificate';
import UberCertificate from '../../Screens/Certificates/UberCertificate';

const TabContentComponent = ({ title,
  draft,
  reviewed,
  inReview,
  item,
  setCertificateLoading,
  showModal,
  setReInspectionId,
  setReInspectionModal,
  setReInspectionLisencePlateNumber }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [companyModalVisible, setCompanyModalVisible] = useState(false);
  const [certificateData, setCertificateData] = useState({
    id: '',
    companyId: '',
    companyName: '',
    templateId: '',
  });

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

  const showModalCompany = () => {
    setCompanyModalVisible(true);
  };

  const handleOkCompany = () => {
    setCompanyModalVisible(false);
  };

  const handleCancelCompany = () => {
    setCompanyModalVisible(false);
  };

  const handleReInspectionId = (item) => {
    console.log('item ::: ', item);
    setReInspectionId(item?.id);
  };

  const handleDownload = (items, id) => {
    setCertificateData({
      id: id,
      companyId: items?.Company?.id,
      companyName: items?.Company?.name,
      templateId: items?.Company?.templateId,
    });
  };

  const handleVehicleDetails = (item) => {
    history.push(`/VehicleAfterReviewing/${item?.id}/${item?.vehicleId}`);
  };

  const handleRedirect = (item) => {
    window.location.href = `/vehicleinspection/${item?.id}/${item?.vehicleId}`;
  };
  return (
    <div>
      {draft === true ? (
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
      ) : reviewed === true ? (
        <>
          <div className="open-tab-container">
            <div
              className="open-tab-bg_color"
              onClick={() => {
                showModalLittle();
                setReInspectionModal(false);
              }}
            >
              <div className="tab-content-container">
                <div className="content-text">{title}</div>
                <div className="arrow-icon-container">
                  <RiArrowRightSLine color="orange" size={30} />
                </div>
              </div>
            </div>
          </div>
          <Modal
            style={{ width: '40px', height: '40px' }}
            title="Basic Modal"
            visible={isModalVisible}
            onOk={handleOkLittle}
            onCancel={() => {
              handleCancelLittle();
              setReInspectionModal(false);
            }}
          >
            <div className="modal-content-container">
              <div></div>
              <div className="option-text">Options</div>
              <GrFormClose color="black" size={25} />
            </div>

            <div
              className="modal-links-container"
              onClick={() => {
                showModalCompany();
                setReInspectionModal(true);
              }}
            >
              <IoDocumentTextOutline color="#1468BA" size={18} />
              <div className="modal-links-text">Download Certificate</div>
            </div>

            <div
              className="modal-links-container"
              onClick={() => {
                showModal();
                handleCancelLittle();
                setReInspectionModal(true);
                setReInspectionLisencePlateNumber(title);
                handleReInspectionId(item);
              }}
            >
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

          <Modal
            style={{ width: '40px', height: '40px' }}
            title="Basic Modal"
            visible={companyModalVisible}
            onOk={handleOkCompany}
            onCancel={() => {
              handleCancelCompany();
              handleCancelLittle();
              setReInspectionModal(false);
            }}
          >
            <div className="companies-modal">
              <div className="modal-content-container">
                <div></div>
                <div className="option-text">Companies</div>
                <GrFormClose color="black" size={25} />
              </div>
              {item?.CompanyInspections?.map((items) => {
                return (
                  <div className="modal-company-text">
                    <div className="modal-links-text">{items?.Company?.name}</div>
                    <input className="checkbox-container" type="radio" name="name" onClick={() => { handleDownload(items, item?.id); handleCancelLittle(); }} />
                  </div>

                );
              })}
              {certificateData?.templateId === 3 ? (
                <>
                  {certificateData?.companyName === 'Uber' || certificateData?.companyName === 'uber' ? (
                    <>
                      <UberCertificate setLoading={setCertificateLoading} companyId={certificateData?.companyId} id={certificateData?.id} />
                    </>
                  ) : (
                    <>
                      <DownloadCertifcate setLoading={setCertificateLoading} companyId={certificateData?.companyId} id={certificateData?.id} />
                    </>
                  )}
                </>
              ) : certificateData?.templateId === 2 ? (
                <>
                  {certificateData?.companyName === 'Uber' || certificateData?.companyName === 'uber' ? (
                    <>
                      <UberCertificate setLoading={setCertificateLoading} companyId={certificateData?.companyId} id={certificateData?.id} />
                    </>
                  ) : certificateData?.companyName !== 'Uber' || certificateData?.companyName !== 'uber' ? (
                    <>
                      <Lyftcertificate setLoading={setCertificateLoading} companyId={certificateData?.companyId} id={certificateData?.id} />
                    </>
                  ) : (
                    <>
                      <DownloadCertifcate setLoading={setCertificateLoading} companyId={certificateData?.companyId} id={certificateData?.id} />
                    </>
                  )}
                </>
              ) : null}
            </div>
          </Modal>


        </>
      ) : (
        <>
          {inReview === true ? (
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
          ) : null}
        </>
      )}
    </div>
  );
};

export default TabContentComponent;
