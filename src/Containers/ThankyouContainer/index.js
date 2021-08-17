/* eslint-disable */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';

import ActionCreators from '../../actions';
import { ThankyouScreen } from '../../Screens';

const ThankyouContainer = () => {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    // if (user?.updates) {
    //   window.location.replace('/logoutForChanges');
    // }
  });
  const handleNext = () => {
    window.location.href = '/userVehicleStatus';
  };

  return <ThankyouScreen handleNext={handleNext} />;
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(ThankyouContainer);
