import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useToasts } from 'react-toast-notifications';

import ActionCreators from '../../actions';
import { VerifyEmailScreen } from '../../Screens';

const queryString = require('query-string');

const VerfiyEmailContainer = (props) => {
  const { addToast } = useToasts();
  const { location } = props;
  const query = queryString.parse(location.search);

  const handleResendEmail = () => {
    const { resendEmail, location } = props;
    const query = queryString.parse(location.search);
    resendEmail({ email: query.email }, addToast);
  };

  return <VerifyEmailScreen isLoading={props.isLoading} email={query.email} handleResendEmail={handleResendEmail} />;
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    isLoading: state.auth.isAuthLoading,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VerfiyEmailContainer);
