import React from 'react';
import './style.css';
import { AiFillCamera, AiOutlineDownload } from 'react-icons/ai';
import { MdPlayArrow } from 'react-icons/md';
import { RiDeleteBin5Line } from 'react-icons/ri';

const InspectionCard = ({ title, titletwo, handleModal, type, category, item, groupType, deleteFile }) => {
  return (
    <div style={{ cursor: 'pointer' }}>
      <div onClick={() => handleModal(item, groupType)} style={{ background: 'none' }}>
        {item.url ? (
          item.type === 'Photo' ? (
            <img alt="" className="inspection-image" src={`${process.env.REACT_APP_AWS_S3_LINK}/${item.url}`} />
          ) : (
            <video className="inspection-image" src={`${process.env.REACT_APP_AWS_S3_LINK}/${item.url}`} />
          )
        ) : (
          <div className="vec-inspection-inspection_card">
            <div className="vec-inspection-camera_icon">{type === 'Photo' ? <AiFillCamera size={22} color="#97A9C5" /> : <MdPlayArrow size={22} color="#97A9C5" />}</div>
            <div className="veh-inspection-downloadicon_center">
              <div className="veh-inspection-download_icon">
                <AiOutlineDownload size={26} color="#1262B1" />
              </div>
            </div>
          </div>
        )}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p className="veh-inspection-registrationcard_text">{title}</p>
        <div style={{ marginLeft: '8px', marginTop: '10px' }} onClick={() => deleteFile(item.groupType, item.fileId)}>
          <RiDeleteBin5Line color="black" size={15} />
        </div>
      </div>
      <p className="veh-inspection-photo_text">{titletwo}</p>
    </div>
  );
};

export default InspectionCard;
