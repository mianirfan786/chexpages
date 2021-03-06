/* eslint-disable */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useToasts } from 'react-toast-notifications';
import { useHistory } from 'react-router-dom';

import { ConfirmEmailScreen } from '../../Screens';
import ActionCreators from '../../actions';

const queryString = require('query-string');

const ConfirmEmailContainer = (props) => {
  const history = useHistory();
  const { addToast } = useToasts();

  useEffect(() => {
    const { location, confirmEmail } = props;
    const query = queryString.parse(location.search);
    if (!query.email || !query.token) {
      addToast('Invalid link!', { type: 'error' });
    } else {
      confirmEmail(query.email, query.token, addToast, history);
    }
  }, []);

  return <ConfirmEmailScreen />;
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    isLoading: state.auth.isAuthLoading,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmEmailContainer);
