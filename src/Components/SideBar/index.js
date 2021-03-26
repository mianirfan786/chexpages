import React from 'react';
import { Drawer } from 'antd';

import './style.css';

const SideBar = ({ drawerVisible, handleSideBar }) => {
  return (
    <Drawer placement={'left'} width={300} closable={false} onClose={() => handleSideBar(false)} visible={drawerVisible}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
};

export default SideBar;
