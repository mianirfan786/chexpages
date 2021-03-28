import React from 'react';
import './style.css';
import { AiFillCamera, AiOutlineDownload } from 'react-icons/ai';
import { MdPlayArrow } from 'react-icons/md';
import { AiFillDelete } from 'react-icons/ai';
// import VideoThumbnail from 'react-video-thumbnail';

const InspectionCard = ({ title, titletwo, handleModal, type, category, item, groupType, deleteFile }) => {
  return (
    <div style={{ cursor: 'pointer' }}>
      <div onClick={() => handleModal(item, groupType)} style={{ background: 'none' }}>
        {item.url ? (
          item.type === 'Photo' ? (
            <img alt="" className="inspection-image" src={`${process.env.REACT_APP_AWS_S3_LINK}/${item.url}`} />
          ) : (
            // <VideoThumbnail
            //   width="100px"
            //   height="95px"
            //   className="inspection-image"
            //   videoUrl={`${process.env.REACT_APP_AWS_S3_LINK}/${item.url}`}
            //   renderThumbnail={true}
            //   width={120}
            //   height={80}
            // />
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
        {item.url ? (
          <div style={{ marginLeft: '8px', marginTop: '10px' }} onClick={() => deleteFile(item.groupType, item.fileId)}>
            <AiFillDelete color="#d92f2f" size={20} />
          </div>
        ) : null}
      </div>
      <p className="veh-inspection-photo_text">{titletwo}</p>
    </div>
  );
};

export default InspectionCard;
