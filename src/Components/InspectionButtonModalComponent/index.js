import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { GrFormClose } from 'react-icons/gr';
import { TiTick } from 'react-icons/ti';
import { ClipLoader } from 'react-spinners';

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
  loadingSelect,
  handleToast,
  reInspectionModal,
  cancleReInspection,
  handleCreateInspection,
  handleLicensePlateNumber,
  handleCreateReInspection,
  reInspectionChecked,
  setReInspectionModal,
  handleReInspectionCheck,
  reInspectionLisencePlateNumber,
  licensePlateNumber,
}) => {
  return (
    <>
      {console.log("reInspectionModal : ", reInspectionModal, "  isModalVisible :: ", isModalVisible)}
      {reInspectionModal === true ? (
        <Modal className="inspection-modal-container" title="Basic Modal" visible={reInspectionModal} onCancel={() => { handleOk() }}>
          <div className="inspection-modal-header">
            <div></div>
            <div className="select-company-text">Re-inspect Car</div>
            <GrFormClose style={{ cursor: 'pointer' }} color="black" size={30} onClick={() => setReInspectionModal(false)} />
          </div>

          <div className="additional-selection-container">
            <div className="additional-selection-text">
              <span style={{ fontWeight: 'bold' }}>$24.99</span> for first inspection and <span style={{ fontWeight: 'bold' }}>$14.99</span> for each additional selection
            </div>
          </div>
          <div className="License-plate-text">License number plate.</div>
          <input disabled={true} placeholder={reInspectionLisencePlateNumber} className="modal-input-field" defaultValue={reInspectionLisencePlateNumber} />
          <div className="select-companies-text">Select Company (s)</div>
          <div className="modal-content-scroll">
            {companies?.map((company) => {
              return (
                <div className="inspection-modal-content_container" onClick={() => handleReInspectionCheck(company?.id)} key={company?.id}>
                  <div style={{ margin: '13px' }} className="inspection-modal-content_text">
                    {company?.name}
                  </div>
                  {reInspectionChecked.includes(company?.id) ? <TiTick className="tick-background-color" color="#FF7C00" size={22} /> : <div className="tick-background-color"></div>}
                </div>
              );
            })}
          </div>

          <div style={{ padding: '15px', width: '300px' }}>
            {reInspectionLisencePlateNumber !== '' && reInspectionChecked.length !== 0 ? (
              <button style={{ border: 'none' }} className="select-btn-container" onClick={() => handleCreateReInspection()}>
                {loadingSelect ?
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '21px' }}>
                    <ClipLoader color={'#246DB5'} size={20} />
                  </div>
                  : <div className="select-text">Select</div>
                }
              </button>
            ) : (
              <button style={{ border: 'none' }} className="select-btn-container" onClick={() => handleToast()}>
                <div className="select-text">Select</div>
              </button>
            )}
          </div>
        </Modal>
      ) : (
        <>
          <div className="inspection-btn-align">
            <div
              className="inspection-btn-container" onClick={() => { showModal(); cancleReInspection(); }} >
              <AiOutlinePlus color="white" size={22} />
              <div className="inspections-btn-text">New Inspection</div>
            </div>
          </div>
          <Modal className="inspection-modal-container" title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            {console.log("reInspectionModal:: ", reInspectionModal)}
            <div className="inspection-modal-header">
              <div></div>
              <div className="select-company-text">New Inspection</div>
              <GrFormClose style={{ cursor: 'pointer' }} color="black" size={30} onClick={() => handleCancel()} />
            </div>

            <div className="additional-selection-container">
              <div className="additional-selection-text">
                <span style={{ fontWeight: 'bold' }}>$24.99</span> for first inspection and <span style={{ fontWeight: 'bold' }}>$14.99</span> for each additional selection
            </div>
            </div>
            <div className="please-enter-text">Please enter your vehicle’s license plate number</div>
            <input type="input" placeholder="License Plate Number" className="modal-input-field" onChange={(number) => handleLicensePlateNumber(number.target.value)} />
            <div className="select-companies-text">Select Company (s)</div>
            <div className="modal-content-scroll">
              {companies?.map((company) => {
                return (
                  <div className="inspection-modal-content_container" onClick={() => checkModal(company?.id)} key={company?.id}>
                    <div style={{ margin: '10px' }} className="inspection-modal-content_text">
                      {company?.name}
                    </div>
                    {modalChecked.includes(company?.id) ? <TiTick className="tick-background-color" color="#FF7C00" size={22} /> : <div className="tick-background-color"></div>}
                  </div>
                );
              })}
            </div>


            <div style={{ padding: '15px', width: '312px' }}>
              {licensePlateNumber !== '' && modalChecked.length !== 0 ? (
                <button style={{ border: 'none' }} className="select-btn-container" onClick={() => handleCreateInspection()}>
                  {loadingSelect ?
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '21px' }}>
                      <ClipLoader color={'#246DB5'} size={20} />
                    </div>
                    : <div className="select-text">Select</div>
                  }
                </button>
              ) : (
                <button style={{ border: 'none' }} className="select-btn-container" onClick={() => handleToast()}>
                  <div className="select-text">Select</div>
                </button>
              )}
            </div>
          </Modal>
        </>
      )}
    </>
  );
};

export default InspectionButtonModalComponent;
