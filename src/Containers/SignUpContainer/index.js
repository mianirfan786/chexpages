/* eslint-disable */

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import ActionCreators from '../../actions';
import { SignUpScreen } from '../../Screens';
import { setCompanies } from '../../utils/functions';

const SignUpContainer = (props) => {
  const history = useHistory();
  const { addToast } = useToasts();
  const [checkboxValue, setCheckBox] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const { getCompanies } = props;
    getCompanies();
  }, []);

  const handleSubmit = (params) => {
    const { register } = props;
    if (checkboxValue) {
      register(params, history, addToast);
    } else {
      addToast('Please accept term of use', { appearance: 'warning' });
    }
  };

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleCheckBox = () => {
    setCheckBox(!checkboxValue);
  };

  return (
    <SignUpScreen
      handleModal={handleModal}
      showModal={showModal}
      handleCheckBox={handleCheckBox}
      companies={props.companies}
      handleSubmit={handleSubmit}
      isLoading={props.isLoading}
    />
  );
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
export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
