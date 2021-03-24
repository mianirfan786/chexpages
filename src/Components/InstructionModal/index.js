import React from 'react';
import {
  Modal,
  //  Upload, Button, message
} from 'antd';

import horn from '../../Assets/horn.png';
import './style.css';
import '../../App.css';

const InstructionModal = ({ isModalVisible, handleImageUpload }) => {
  return (
    <div className="instruction-modal">
      <Modal
        visible={isModalVisible}
        closable={true}
        title={false}
        style={{ width: '100%' }}
        footer={null}
        bodyStyle={{
          width: '100%',
          height: '100vh',
          textAlign: 'center',
          background: 'linear-gradient(0deg,rgba(27,104,179,0.6) 0%,#1b68b3 99.97%)',
        }}
      >
        <div style={{ marginBottom: '116px', fontSize: '26px', color: 'white' }}>Horn</div>
        <div style={{ marginBottom: '100px' }}>
          <img alt="" style={{ width: '335px', height: '220px' }} src={horn} />
          <div style={{ color: 'white' }}>Please record a 3 second video clip of honking horn with a clear sound.</div>
        </div>
        {/* <Upload onChange={onUploadFile} {...props}>
          <Button className="button-wrapper">Click to upload</Button>
        </Upload> */}
        <input type="file" accept="image/*" onChange={(event) => handleImageUpload(event)} />
      </Modal>
    </div>
  );
};

export default InstructionModal;
