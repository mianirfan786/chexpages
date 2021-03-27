import React from 'react';
import { Drawer } from 'antd';
import { Link } from 'react-router-dom';
// import TestingImage from '../../Assets/testing.png';
import { AiTwotoneHome } from 'react-icons/ai';
import { FaHistory } from 'react-icons/fa';
import { FaCar } from 'react-icons/fa';
import { MdCall } from 'react-icons/md';
import { RiLogoutCircleRLine } from 'react-icons/ri';
// import { useHistory } from 'react-router-dom';
import './style.css';

const SideBar = ({ drawerVisible, handleSideBar }) => {
  // const history = useHistory();
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload(false);
  };
  return (
    <Drawer placement={'left'} width={300} closable={false} onClose={() => handleSideBar(false)} visible={drawerVisible}>
      <div className="img-container">
        <div className="menu-image">
          <p className="image-text">
            CHEX.<span style={{ color: '#FF7A00' }}>AI</span>
          </p>
        </div>
      </div>
      <Link to="/vehicleinspection" className="icon-bar">
        <AiTwotoneHome />
        <div className="icon-text">Home</div>
      </Link>
      <div className="icon-bar">
        <FaHistory />
        <div className="icon-text">History</div>
      </div>
      <Link to="/VehicleDetail" className="icon-bar">
        <FaCar />
        <div className="icon-text">Vehicle Details</div>
      </Link>
      <div className="icon-bar">
        <MdCall />
        <div className="icon-text">Contact us</div>
      </div>
      <div onClick={handleLogout} className="icon-bar">
        <RiLogoutCircleRLine />
        <div className="icon-text">Logout</div>
      </div>
    </Drawer>
  );
};

export default SideBar;
