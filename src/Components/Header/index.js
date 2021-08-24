import React, { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useHistory } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import SideBar from '../SideBar';
import './style.css';

const Header = ({ arrow, path }) => {
  const history = useHistory();
  const [sideBar, setSideBar] = useState(false);

  const handleSideBar = (value) => {
    setSideBar(value);
  };

  const handleBackArrow = (path) => {
    history.push(`${path}`)
  };

  return (
    <div className="header-center">
      <div className="header-width">
        {/* <div className="icon-container">
          <i className="fas fa-chevron-left fa-2x" style={{ opacity: 0 }} color="#FFFFFF" />
        </div> */}
        <div className="vec-inspection-top_header">
          {!arrow ? (
            <div className="icon-container">
              <div style={{ width: '32px' }} />
            </div>
          ) : (path ? <IoIosArrowBack size={32} color="white" onClick={() => handleBackArrow(path)} /> :
            <IoIosArrowBack size={32} color="white" />
          )}

          <p className="veh-inspection-chexai_text">
            CHEX.<span style={{ color: '#FF7A00' }}>AI</span>
          </p>
          <div onClick={() => handleSideBar(true)}>
            <FiMenu size={32} color="white" />
          </div>
        </div>
        <span className="nav-back-arrow" />
        <SideBar handleSideBar={handleSideBar} drawerVisible={sideBar} />
      </div>
    </div>
  );
};

export default Header;
