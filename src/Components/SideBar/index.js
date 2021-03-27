import React from 'react';
import { Drawer } from 'antd';
// import TestingImage from '../../Assets/testing.png';
import { AiTwotoneHome } from 'react-icons/ai';
import { FaHistory } from 'react-icons/fa';
import { FaCar } from 'react-icons/fa';
import { MdCall } from 'react-icons/md';
import { RiLogoutCircleRLine } from 'react-icons/ri';

import './style.css';

const SideBar = ({ drawerVisible, handleSideBar }) => {
  return (
    <Drawer placement={'left'} width={300} closable={false} onClose={() => handleSideBar(false)} visible={drawerVisible}>
      <div className="img-container">
        <div className="menu-image">
          <p className="image-text">CHEX.AI</p>
        </div>
      </div>
      <div className="icon-bar">
        <AiTwotoneHome />
        <div className="icon-text">Home</div>
      </div>
      <div className="icon-bar">
        <FaHistory />
        <div className="icon-text">History</div>
      </div>
      <div className="icon-bar">
        <FaCar />
        <div className="icon-text">Vehicle Details</div>
      </div>
      <div className="icon-bar">
        <MdCall />
        <div className="icon-text">Contact us</div>
      </div>
      <div className="icon-bar">
        <RiLogoutCircleRLine />
        <div className="icon-text">Logout</div>
      </div>
    </Drawer>
  );
};

export default SideBar;
