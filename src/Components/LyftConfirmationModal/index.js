import React from 'react';
import { Modal } from 'antd';

import Button from '../Button/index';
import './style.css';
import '../../App.css';

const LyftConfirmationModal = ({ loading, visibleLyft, handleSubmitLyftModal }) => {
  return (
    <div>
      <Modal visible={visibleLyft} closable={false} footer={null} bodyStyle={{ height: '50%' }} wrapClassName="modalSize">
        <div className="textSize">Please select one of the below options:</div>
        <div className="btnComponentContainerModal">
          <Button buttonClass="register-modal-btn" onClickButton={() => handleSubmitLyftModal(true)} title="APPLICANT" />
        </div>
        <div className="btnComponentContainerModal">
          <Button buttonClass="register-modal-btn" onClickButton={() => handleSubmitLyftModal(false)} title="CURRENT LYFT Driver" />
        </div>
      </Modal>
    </div>
  );
};

export default LyftConfirmationModal;
