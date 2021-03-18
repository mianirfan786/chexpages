import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ActionCreators from '../../actions';

const VehicleInspectionContainer = (props) => {
  return (
    <div
      style={{
        fontSize: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      Comming Soon
    </div>
  );
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
