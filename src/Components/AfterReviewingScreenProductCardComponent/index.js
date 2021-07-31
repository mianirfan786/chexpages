import React from 'react';
import { HiCamera } from 'react-icons/hi';

import './style.css';

const AfterReviewingScreenProductCardComponent = ({ item, handleModal, handleModalClose }) => {
    const name = item?.category.replaceAll('_', ' ');
    return (
        <div>
            <div>
                {item.url ? (
                    item.extension.includes('image') ? (
                        <div onClick={() => handleModal(`${process.env.REACT_APP_AWS_S3_LINK}/${item?.url}`, "image")} className="produc-card-bg_img">
                            <img style={{ height: '100px', width: '150px' }} alt="" src={`${process.env.REACT_APP_AWS_S3_LINK}/${item?.url}`} />
                            <HiCamera color="#97A9C5" size={20} className="camera-icon_container" />
                        </div>
                    ) : (item.extension.includes('video') ? (
                        <div onClick={() => handleModal(`${process.env.REACT_APP_AWS_S3_LINK}/${item.url}#t=0.5`, "video")}>
                            <video preload="metadata" autoPlay={false} className="produc-card-bg_img">
                                <source src={`${process.env.REACT_APP_AWS_S3_LINK}/${item.url}#t=0.5`} type="video/mp4" />
                            </video>
                        </div>
                        // <HiCamera color="#97A9C5" size={20} className="camera-icon_container" />
                    ) : null
                    )) : null}
            </div>

            <div className="product-name">{name}</div>
            {item?.category ? item?.extension?.includes('image') ?
                <div className="product-type">photo</div>
                : item?.extension?.includes('video') ?
                    <div className="product-type">clip</div>
                    : null : null}
        </div>
    )
};

export default AfterReviewingScreenProductCardComponent;