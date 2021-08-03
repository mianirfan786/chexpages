import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { GrFormClose } from 'react-icons/gr';
import { TiTick } from 'react-icons/ti';

import { Modal } from 'antd';
import './style.css';

const InspectionButtonModalComponent = ({
  companies,
  handleCancel,
  handleOk,
  checkModal,
  showModal,
  isModalVisible,
  modalChecked,
  handleToast,
  reInspectionModal,
  handleCreateInspection,
  handleLicensePlateNumber,
  handleCreateReInspection,
  setReInspectionModal,
  reInspectionLisencePlateNumber,
  licensePlateNumber,
}) => {
  return (
    <>
      <div className="inspection-btn-align">
        <div
          className="inspection-btn-container"
          onClick={() => {
            setReInspectionModal(false);
            showModal();
          }}
        >
          <AiOutlinePlus color="white" size={22} />
          <div className="inspections-btn-text">New Inspection</div>
        </div>
      </div>

      {console.log(reInspectionModal)}
      {reInspectionModal === true ? (
        <Modal className="inspection-modal-container" title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <div className="inspection-modal-header">
            <div></div>
            <div className="select-company-text">Select Company</div>
            <GrFormClose color="black" size={30} />
          </div>

          <div className="additional-selection-container">
            <div className="additional-selection-text">
              <span style={{ fontWeight: 'bold' }}>$24.99</span> for first inspection and <span style={{ fontWeight: 'bold' }}>$14.99</span> for each additional selection
            </div>
          </div>
          <input type="input" placeholder="License Plate Number" className="modal-input-field" defaultValue={reInspectionLisencePlateNumber} />
          {companies?.map((company) => {
            return (
              <div className="inspection-modal-content_container" onClick={() => checkModal(company?.id)}>
                <div style={{ margin: '10px' }} className="inspection-modal-content_text">
                  {company?.name}
                </div>
                {modalChecked.includes(company?.id) ? <TiTick color="#FF7C00" size={22} /> : <TiTick color="white" size={22} />}
              </div>
            );
          })}
          <div style={{ padding: '15px', width: '80%' }}>
            {reInspectionLisencePlateNumber !== '' && modalChecked.length !== 0 ? (
              <button style={{ border: 'none' }} className="select-btn-container" onClick={() => handleCreateReInspection()}>
                <div className="select-text">Select</div>
              </button>
            ) : (
              <button style={{ border: 'none', marginBottom: '10px' }} className="select-btn-container" onClick={() => handleToast()}>
                <div className="select-text">Select</div>
              </button>
            )}
          </div>
        </Modal>
      ) : (
        <Modal className="inspection-modal-container" title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <div className="inspection-modal-header">
            <div></div>
            <div className="select-company-text">Select Company</div>
            <GrFormClose color="black" size={30} />
          </div>

          <div className="additional-selection-container">
            <div className="additional-selection-text">
              <span style={{ fontWeight: 'bold' }}>$24.99</span> for first inspection and <span style={{ fontWeight: 'bold' }}>$14.99</span> for each additional selection
            </div>
          </div>
          <input type="input" placeholder="License Plate Number" className="modal-input-field" onChange={(number) => handleLicensePlateNumber(number.target.value)} />
          {companies?.map((company) => {
            return (
              <div className="inspection-modal-content_container" onClick={() => checkModal(company?.id)}>
                <div style={{ margin: '10px' }} className="inspection-modal-content_text">
                  {company?.name}
                </div>
                {modalChecked.includes(company?.id) ? <TiTick color="#FF7C00" size={22} /> : <TiTick color="white" size={22} />}
              </div>
            );
          })}
          <div style={{ padding: '15px', width: '80%' }}>
            {licensePlateNumber !== '' && modalChecked.length !== 0 ? (
              <button style={{ border: 'none' }} className="select-btn-container" onClick={() => handleCreateInspection()}>
                <div className="select-text">Select</div>
              </button>
            ) : (
              <button style={{ border: 'none', marginBottom: '10px' }} className="select-btn-container" onClick={() => handleToast()}>
                <div className="select-text">Select</div>
              </button>
            )}
          </div>
        </Modal>
      )}
      {/* <Modal className="inspection-modal-container" title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>

        <div className="inspection-modal-header">
          <div></div>
          <div className="select-company-text">Select Company</div>
          <GrFormClose color="black" size={30} />
        </div>

        <div className="additional-selection-container">
          <div className="additional-selection-text">
            <span style={{ fontWeight: 'bold' }}>$24.99</span> for first inspection and <span style={{ fontWeight: 'bold' }}>$14.99</span> for each additional selection
          </div>
        </div>
        <input type="input" placeholder="License Plate Number" className="modal-input-field" onChange={(number) => handleLicensePlateNumber(number.target.value)} />
        {companies?.map((company) => {
          return (
            <div className="inspection-modal-content_container"
              onClick={() => checkModal(company?.id)}
            >
              <div style={{ margin: '10px' }} className="inspection-modal-content_text" >{company?.name}</div>
              {modalChecked.includes(company?.id) ? <TiTick color="#FF7C00" size={22} /> : <TiTick color="white" size={22} />}

            </div>
          );
        })}
        <div style={{ padding: '15px', width: '80%' }}>
          {licensePlateNumber !== "" && modalChecked.length !== 0 ?
            <button style={{ border: 'none' }} className="select-btn-container" onClick={() => handleCreateInspection()}>
              <div className="select-text">Select</div>
            </button>
            :
            <button style={{ border: 'none', marginBottom: '10px' }} className="select-btn-container" onClick={() => handleToast()}>
              <div className="select-text">Select</div>
            </button>
          }
        </div>
      </Modal> */}
    </>
  );
};

export default InspectionButtonModalComponent;
