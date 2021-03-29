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
        <ModalBody>
          <InSideBody>
            <ModalHeading>Are you sure you want to delete the data?</ModalHeading>
            <MtB5>
              <LinkSignInBtn onClick={onClickYes} type="submit">
                {loading ? <ClipLoader color={'white'} size={20} /> : 'Yes'}
              </LinkSignInBtn>
              <LinkSignInBtn style={{ marginTop: '10px' }} onClick={() => handleModal(false)} type="submit">
                No
              </LinkSignInBtn>
            </MtB5>
          </InSideBody>
        </ModalBody>
      </Modal>
    </MainContainer>
  );
};

export default DeleteImageModal;
