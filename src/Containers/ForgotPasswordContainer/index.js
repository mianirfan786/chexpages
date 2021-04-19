import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import ActionCreators from '../../actions';
import { ForgotPasswordScreen } from '../../Screens';

const ForgotPasswordContainer = (props) => {
  const history = useHistory();
  const { addToast } = useToasts();

  const handleSubmit = (params) => {
    const { forgotPassword } = props;
    forgotPassword(params, history, addToast);
  };

  return <ForgotPasswordScreen handleSubmit={handleSubmit} isLoading={props.isLoading} />;
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    isLoading: state.auth.isAuthLoading,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordContainer);
