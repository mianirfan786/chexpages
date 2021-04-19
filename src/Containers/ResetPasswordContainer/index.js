import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import ActionCreators from '../../actions';
import { ResetPasswordScreen } from '../../Screens';

const queryString = require('query-string');

const ResetPasswordContainer = (props) => {
  const history = useHistory();
  const { addToast } = useToasts();

  const handleSubmit = (params) => {
    const { location, resetPassword } = props;
    const query = queryString.parse(location.search);
    params.email = query.email;
    resetPassword(params, history, addToast);
  };

  return <ResetPasswordScreen handleSubmit={handleSubmit} isLoading={props.isLoading} />;
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    isLoading: state.auth.isAuthLoading,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordContainer);
