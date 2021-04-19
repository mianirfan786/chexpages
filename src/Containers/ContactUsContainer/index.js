/* eslint-disable */

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useStripe, useElements, CardNumberElement } from '@stripe/react-stripe-js';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import ActionCreators from '../../actions';
import { ContactUsScreen } from '../../Screens';
import { setCompanies } from '../../utils/functions';

const ContactUsContainer = (props) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState()
  const {addToast} = useToasts();
  
  const handleChange = (event) => {
    const obj = {...data};
    obj[event.target.name] = event.target.value;
    setData(obj);
  }
  
  const handleSubmit = (data) => {
    console.log("check")
    const {contactUs, history} = props;
   contactUs(data, addToast, history, setLoading);
  }
  return <ContactUsScreen handleSubmit={() => handleSubmit(data)} handleChange={handleChange} loading={loading} />;
};
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    vehicleData: state.auth.vehicleData,
    isLoading: state.auth.isAuthLoading,
    companies: setCompanies(state.auth.companies),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactUsContainer);
