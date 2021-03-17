import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import ActionCreators from '../../actions';
import { SignUpScreen } from '../../Screens';

const SignUpContainer = (props) => {
  const history = useHistory();
  const { addToast } = useToasts();

  const handleSubmit = (params) => {
    const { register } = props;
    register(params, history, addToast);
  };

  return <SignUpScreen handleSubmit={handleSubmit} isLoading={props.isLoading} />;
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    isLoading: state.auth.isAuthLoading,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
