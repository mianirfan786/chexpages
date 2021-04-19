/* eslint-disable */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import ActionCreators from '../../actions';
import { TermsAndPolicyScreen } from '../../Screens';
import { setCompanies } from '../../utils/functions';

const TermsAndPolicyContainer = (props) => {


  return <TermsAndPolicyScreen />;
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    isLoading: state.auth.isAuthLoading,
    companies: setCompanies(state.auth.companies),
  };
} 
export default connect(mapStateToProps, mapDispatchToProps)(TermsAndPolicyContainer);
