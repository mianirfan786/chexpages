/* eslint-disable */

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { useHistory } from 'react-router-dom';
// import { useToasts } from 'react-toast-notifications';

import { VehicleStatusScreen } from '../../Screens';
import ActionCreators from '../../actions';

const VehicleStatusContainer = (props) => {
  const [loading, setLoading] = useState(false);
  const [vehicleLoading, setVehicleLoading] = useState(false);
  useEffect(() => {
    const { currentUser, getVehiclesStatus } = props;
    getVehiclesStatus(currentUser?.vehicles[0]?.id, setLoading);
  }, []);

  return <VehicleStatusScreen vehicleLoading={vehicleLoading} setLoading={setVehicleLoading} loading={loading} vehicleStatus={props.vehicleStatus} />;
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    currentUser: state.auth.currentUser,
    vehicleStatus: state.vehicleInstruction.vehicleStatus,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VehicleStatusContainer);
