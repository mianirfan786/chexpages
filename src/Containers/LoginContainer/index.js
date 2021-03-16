import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import ActionCreators from '../../actions';

import { LoginScreen } from '../../Screens';

const LoginContainer = (props) => {
  const history = useHistory();
  const { addToast } = useToasts();

  const handleSubmit = (params) => {
    const { login } = props;
    login(params, history, addToast);
  };

  return <LoginScreen handleSubmit={handleSubmit} />;
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(null, mapDispatchToProps)(LoginContainer);
