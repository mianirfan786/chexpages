/* eslint-disable */

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import ActionCreators from '../../actions';
import { SignUpScreen } from '../../Screens';
import { LyftConfirmationModal } from '../../Components';
import { setCompanies } from '../../utils/functions';

const SignUpContainer = (props) => {
  const history = useHistory();
  const { addToast } = useToasts();
  const [checkboxValue, setCheckBox] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [visible, setVisible] = useState(false);
  const [dropDown, setDropdownValue] = useState(false);
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    const { getCompanies } = props;
    getCompanies();
  }, []);

  const handleSubmit = (params) => {
    const { register } = props;
    const lyftUser = params.companies.includes(lyft.value);
    if (checkboxValue) {
      register(params, history, addToast, lyftUser, handleModalLyft);
    } else {
      addToast('Please accept term of use', { appearance: 'warning' });
    }
  };
  const lyft = props.companies.find((element) => element.label == 'Lyft' || element.label == 'lyft');

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleCheckBox = () => {
    setCheckBox(!checkboxValue);
  };

  const handleModalLyft = (flag, userId) => {
    setVisible(flag);
    setUserId(userId);
  };

  const handleSubmitLyftModal = (value) => {
    const { setLyftUserStatus } = props;
    const status = {
      lyft_user: value,
    };
    setLyftUserStatus(status, setVisible, userId, history);
  };

  const handleDropDown = () => {
    setDropdownValue(!dropDown);
  };

  return (
    <>
      <SignUpScreen
        handleModal={handleModal}
        dropDown={dropDown}
        showModal={showModal}
        handleCheckBox={handleCheckBox}
        companies={props.companies}
        handleSubmit={handleSubmit}
        isLoading={props.isLoading}
        handleDropDown={handleDropDown}
      />
      <LyftConfirmationModal handleSubmitLyftModal={handleSubmitLyftModal} visibleLyft={visible} />
    </>
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
