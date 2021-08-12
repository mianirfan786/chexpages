/*eslint-disable */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { useToasts } from 'react-toast-notifications';

import ActionCreators from '../../actions';
import { VehicleCombineStatusScreen } from '../../Screens';

const VehicleCombinedStatusContainer = (props) => {
  const history = useHistory();
  const { addToast } = useToasts();
  const { getInspectionByStatus, getVehicleCertificate, createInspection, createReInspection, vehiclesByStatus, getCompanies, companies } = props;
  const [loading, setLoading] = useState(false);
  const [loadingSelect, setLoadingSelect] = useState(false);
  const [certificateLoading, setCertificateLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [reInspectionModal, setReInspectionModal] = useState(false);
  const [reInspectionId, setReInspectionId] = useState('');
  const [reInspectionLisencePlateNumber, setReInspectionLisencePlateNumber] = useState('');
  // const [isModalChecked, setIsModalChecked] = useState(false);
  const [modalChecked, setModalChecked] = useState([]);
  const [reInspectionChecked, setReInspectionChecked] = useState([]);
  const [licensePlateNumber, setLicensePlateNumber] = useState('');
  const [status, setStatus] = useState('');
  const [inputEmpty, setInputEmpty] = useState(false);
  const [checkEmpty, setCheckEmpty] = useState(false);
  const [checkUnselect, setCheckUnselect] = useState(false);

  useEffect(() => {
    getInspectionByStatus(
      {
        status: 'REVIEWED',
      },
      setLoading
    );
    getCompanies();
  }, []);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const cancleReInspection = () => {
    setReInspectionModal(false);
  };

  const handleLicensePlateNumber = (number) => {
    setLicensePlateNumber(number);
  };

  const checkModal = (id) => {
    const arr = [...modalChecked];
    let index = arr.indexOf(id);
    if (index > -1) {
      arr.splice(index, 1);
      setModalChecked([...arr]);
    } else {
      arr.push(id);
      setModalChecked([...arr]);
    }
  };

  const handlEmptyFields = () => {
    licensePlateNumber === '' ? setInputEmpty(true) : setInputEmpty(false);
    modalChecked.length === 0 ? setCheckEmpty(true) : setCheckEmpty(false);
  }

  const handleReInspectionCheck = (id) => {
    const arr = [...reInspectionChecked];
    let index = arr.indexOf(id);
    if (index > -1) {
      arr.splice(index, 1);
      setReInspectionChecked([...arr]);
    } else {
      arr.push(id);
      setReInspectionChecked([...arr]);
    }
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleToast = () => {
    {
      addToast('Incomplete information ', { appearance: 'warning' });
    }
  };

  const handleStatus = (status) => {
    setStatus(status);
    getInspectionByStatus(
      {
        status: status,
      },
      setLoading
    );
  };

  const handleCreateReInspection = () => {
    const body = {
      companies: reInspectionChecked,
    };
    createReInspection(reInspectionId, body, history, setReInspectionModal, setLoadingSelect);
  };

  const handleCreateInspection = () => {
    const body = {
      licensePlateNumber,
      companies: modalChecked,
    };
    createInspection(body, history, addToast, setLoadingSelect);
  };
  return (
    <div>
      <VehicleCombineStatusScreen
        isModalVisible={isModalVisible}
        modalChecked={modalChecked}
        reInspectionChecked={reInspectionChecked}
        handleCancel={handleCancel}
        handleToast={handleToast}
        handleOk={handleOk}
        checkModal={checkModal}
        showModal={showModal}
        companies={companies}
        isLoading={loading}
        status={status}
        setLoading={setLoading}
        certificateLoading={certificateLoading}
        setCertificateLoading={setCertificateLoading}
        setReInspectionId={setReInspectionId}
        reInspectionModal={reInspectionModal}
        cancleReInspection={cancleReInspection}
        loadingSelect={loadingSelect}
        setReInspectionModal={setReInspectionModal}
        handleCreateReInspection={handleCreateReInspection}
        handleReInspectionCheck={handleReInspectionCheck}
        reInspectionLisencePlateNumber={reInspectionLisencePlateNumber}
        setReInspectionLisencePlateNumber={setReInspectionLisencePlateNumber}
        handleCreateInspection={handleCreateInspection}
        handleLicensePlateNumber={handleLicensePlateNumber}
        licensePlateNumber={licensePlateNumber}
        vehiclesByStatus={vehiclesByStatus}
        handleStatus={handleStatus}
        handlEmptyFields={handlEmptyFields}
        inputEmpty={inputEmpty}
        setInputEmpty={setInputEmpty}
        checkEmpty={checkEmpty}
        setCheckEmpty={setCheckEmpty}
        checkUnselect={checkUnselect}
        setCheckUnselect={setCheckUnselect}
      />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  console.log(' state : ', state);
  return {
    // vehicleData: state.auth.vehicleData,
    // isLoading: state.auth.isAuthLoading,
    // companies: setCompanies(state.auth.companies),
    vehiclesByStatus: state.vehicleInstruction.inspectionByStatus,
    companies: state?.auth?.companies?.data,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(VehicleCombinedStatusContainer);
