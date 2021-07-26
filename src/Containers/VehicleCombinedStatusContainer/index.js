/*eslint-disable */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ActionCreators from '../../actions';
import { VehicleCombineStatusScreen } from '../../Screens';

const VehicleCombinedStatusContainer = (props) => {
  const { getInspectionByStatus, createInspection, vehiclesByStatus, getCompanies, companies } = props;
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  // const [isModalChecked, setIsModalChecked] = useState(false);
  const [modalChecked, setModalChecked] = useState([]);


  const showModal = () => {
    setIsModalVisible(true);
  };

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


  useEffect(() => {
    getInspectionByStatus({
      status: 'REVIEWED'
    }, setLoading);
    getCompanies();
  }, []);

  const handleStatus = (status) => {
    getInspectionByStatus({
      status: status,
    }, setLoading);
  };

  const handleCreateInspection = () => {
    const body = {
      companies: modalChecked
    }
    createInspection(body);
  }
  return (
    <div>
      <VehicleCombineStatusScreen
        isModalVisible={isModalVisible}
        modalChecked={modalChecked}
        handleCancel={handleCancel}
        handleOk={handleOk}
        checkModal={checkModal}
        showModal={showModal}
        companies={companies}
        isLoading={loading}
        handleCreateInspection={handleCreateInspection}
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
