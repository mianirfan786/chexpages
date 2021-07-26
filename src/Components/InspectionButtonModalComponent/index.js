import React, { useState } from 'react';
import { Modal } from 'antd';

import { AiOutlinePlus } from 'react-icons/ai';
import { GrFormClose } from 'react-icons/gr';
import { TiTick } from 'react-icons/ti';
import './style.css';
import { Link } from 'react-router-dom';

const InspectionButtonModalComponent = ({
  companies,
  handleCancel,
  handleOk,
  checkModal,
  showModal,
  isModalVisible,
  modalChecked,
  handleCreateInspection }) => {

  return (
    <>
      <div className="inspection-btn-align">
        <div className="inspection-btn-container" onClick={showModal}>
          <AiOutlinePlus color="white" size={22} />
          <div className="inspections-btn-text">New Inspection</div>
        </div>
      </div>
      <Modal className="inspection-modal-container" title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <div className="inspection-modal-header">
          <div></div>
          <div className="select-company-text">Select Compnay</div>
          <GrFormClose color="black" size={30} />
        </div>

        <div className="additional-selection-container">
          <div className="additional-selection-text">
            <span style={{ fontWeight: 'bold' }}>$24.99</span> for first inspection and <span style={{ fontWeight: 'bold' }}>$14.99</span> for each additional selection
          </div>
        </div>
        {companies?.map((company) => {
          return (
            <div className="inspection-modal-content_container"
              onClick={() => checkModal(company?.id)}
            >
              {console.log(modalChecked.includes(company?.id))}
              <div style={{ margin: '10px' }} className="inspection-modal-content_text" >{company?.name}</div>
              {modalChecked.includes(company?.id) ? <TiTick color="#FF7C00" size={22} /> : <TiTick color="white" size={22} />}

            </div>
          );
        })}

        <div className="select-btn-container" onClick={() => handleCreateInspection()}>
          <Link className="select-text">Select</Link>
        </div>
      </Modal>
    </>
  );
};

export default InspectionButtonModalComponent;
