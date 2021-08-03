/* eslint-disable */
import React, { useState } from 'react';
import { Modal } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import ClipLoader from 'react-spinners/ClipLoader';

import { MainContainer, ModalBody, ModalHeading, InSideBody, MtB5, LinkSignInBtn } from './style';

import './style.css';

const DeleteImageModal = ({ isVisible, imageId, handleModal, onClickYes, loading }) => {
  return (
    <MainContainer>
      <Modal className="sure-modal" visible={isVisible} onCancel={() => handleModal(false)} closeIcon={<CloseOutlined color="#BCCBD9" size={30} />}>
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
          <ModalBody>
            <InSideBody>
              <ModalHeading>Are you sure you want to delete this inspection item?</ModalHeading>
              <MtB5>
                <div className="no-btn-container" onClick={() => handleModal(false)} type="submit">
                  No
                </div>

                <div className="yes-btn-container" onClick={onClickYes} type="submit">
                  {loading ? <ClipLoader color={'white'} size={20} /> : 'Yes'}
                </div>
              </MtB5>
            </InSideBody>
          </ModalBody>
        </div>
      </Modal>
    </MainContainer>
  );
};

export default DeleteImageModal;
