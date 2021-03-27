/* eslint-disable */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';

import ActionCreators from '../../actions';
import { ThankyouScreen } from '../../Screens';

const ThankyouContainer = () => {
  const history = useHistory();

  const handleNext = () => {
    history.push('/vehicleStatus');
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
