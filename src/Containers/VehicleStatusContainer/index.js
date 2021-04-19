/* eslint-disable */

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { useToasts } from 'react-toast-notifications';
import Loading from '../../HOC/index';

import { VehicleStatusScreen } from '../../Screens';
import ActionCreators from '../../actions';

const VehicleStatusContainer = (props) => {
  const [loading, setLoading] = useState(false);
  const [vehicleLoading, setVehicleLoading] = useState(false);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user?.updates || user?.updates === null || user?.updates === undefined) {
      window.location.replace('/logoutForChanges');
    }
    const { currentUser, getVehiclesStatus } = props;
    getVehiclesStatus(currentUser?.vehicles[0]?.id, setLoading);
  }, []);

  return (
    <VehicleStatusScreen
      vehicleStatuss={props.vehicleStatuss}
      vehicleLoading={vehicleLoading}
      setLoading={setVehicleLoading}
      loading={loading}
      vehicleStatus={props.vehicleStatus}
    />
  );
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

export default connect(mapStateToProps, mapDispatchToProps)(Loading(VehicleStatusContainer));
