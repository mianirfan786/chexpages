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
  const { getInspectionByStatus, createInspection, vehiclesByStatus, getCompanies, companies } = props;
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  // const [isModalChecked, setIsModalChecked] = useState(false);
  const [modalChecked, setModalChecked] = useState([]);
  const [licensePlateNumber, setLicensePlateNumber] = useState("");
  const [status, setStatus] = useState("");

  const { addToast } = useToasts();


  useEffect(() => {
    getInspectionByStatus({
      status: 'REVIEWED'
    }, setLoading);
    getCompanies();
  }, []);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleLicensePlateNumber = (number) => {
    setLicensePlateNumber(number);
  }

  const checkModal = (id) => {
    const arr = [...modalChecked];
    let index = arr.indexOf(id);
    if (index > -1) {
      arr.splice(index, 1);
      setModalChecked([...arr]);
    }
    else {
      arr.push(id);
      setModalChecked([...arr]);
    }
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleToast = () => {
    { addToast('Incomplete information ', { appearance: 'warning' }) }
  }


  const handleStatus = (status) => {
    setStatus(status);
    getInspectionByStatus({
      status: status,
    }, setLoading);
  };

  const handleCreateInspection = () => {
    const body = {
      licensePlateNumber,
      companies: modalChecked
    }
    createInspection(body, history);
  }
  return (
    <div>
      <VehicleCombineStatusScreen
        isModalVisible={isModalVisible}
        modalChecked={modalChecked}
        handleCancel={handleCancel}
        handleToast={handleToast}
        handleOk={handleOk}
        checkModal={checkModal}
        showModal={showModal}
        companies={companies}
        isLoading={loading}
        status={status}
        handleCreateInspection={handleCreateInspection}
        handleLicensePlateNumber={handleLicensePlateNumber}
        licensePlateNumber={licensePlateNumber}
        vehiclesByStatus={vehiclesByStatus}
        handleStatus={handleStatus} />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  console.log(" state : ", state);
  return {
    // vehicleData: state.auth.vehicleData,
    // isLoading: state.auth.isAuthLoading,
    // companies: setCompanies(state.auth.companies),
    vehiclesByStatus: state.vehicleInstruction.inspectionByStatus,
    companies: state?.auth?.companies?.data,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(VehicleCombinedStatusContainer);
