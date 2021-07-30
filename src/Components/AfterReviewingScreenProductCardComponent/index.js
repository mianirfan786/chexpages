import React from 'react';
import { HiCamera } from 'react-icons/hi';

import './style.css';

const AfterReviewingScreenProductCardComponent = ({ item }) => {
    const vari = item?.category.replaceAll('_', ' ');
    console.log("vari :: ", vari);
    return (
        <div>
            <div className="produc-card-bg_img">
                <img style={{ height: '100px', width: '150px' }} alt="" src={`${process.env.REACT_APP_AWS_S3_LINK}/${item?.url}`} />
                <HiCamera color="#97A9C5" size={20} className="camera-icon_container" />
            </div>
            <div className="product-name">{vari}</div>
            <div className="product-type">{item?.groupType}</div>
        </div>
    )
};

export default AfterReviewingScreenProductCardComponent;