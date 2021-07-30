import React from 'react';
import './style.css';
import { FiMenu } from 'react-icons/fi';
import { IoIosArrowBack } from 'react-icons/io';

const AfterReviewingHeaderComponent = () => {
    return (

        <div className="after-reviewing-header_container">
            <IoIosArrowBack color="white" size={28} />
            <div className="chexs-text">Chex<span style={{ color: '#FF7A00' }}>.AI</span></div>
            <FiMenu color="white" size={26} />
        </div>

    )
};

export default AfterReviewingHeaderComponent;