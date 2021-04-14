import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useToasts } from 'react-toast-notifications';
import { useHistory } from 'react-router-dom';

import ActionCreators from '../../actions';
import { VerifyEmailScreen } from '../../Screens';
import LyftConfirmationModal from '../../Components/LyftConfirmationModal';

const queryString = require('query-string');

const VerfiyEmailContainer = (props) => {
  const { addToast } = useToasts();
  const history = useHistory();
  const { location } = props;
  const query = queryString.parse(location.search);
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    if (query.lyftUser==='true')
      setVisible(true);
  }, [])

  const handleResendEmail = () => {
    const { resendEmail, location } = props;
    const query = queryString.parse(location.search);
    resendEmail({ email: query.email }, addToast, history);
  };

  const logout = () => {
    history.push('/login');
  };

  return (
    <>
      <LyftConfirmationModal visibleLyft={visible} />
      <VerifyEmailScreen isLoading={props.isLoading} email={query.email} handleResendEmail={handleResendEmail} logout={logout} />
    </>
  )
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
