import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { VehicleInspectionScreen } from '../../Screens';
import ActionCreators from '../../actions';

const VehicleInspectionContainer = (props) => {
  return <VehicleInspectionScreen />;
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    isLoading: state.auth.isAuthLoading,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VehicleInspectionContainer);
