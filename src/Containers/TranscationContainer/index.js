/* eslint-disable */

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useStripe, useElements, CardNumberElement } from '@stripe/react-stripe-js';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import ActionCreators from '../../actions';
import { TranscationScreen } from '../../Screens';
import { setCompanies } from '../../utils/functions';

const TranscationContainer = (props) => {
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();
  const { addToast } = useToasts();

  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardNumberElement);
    const result = await stripe.createToken(card);
    const { vehicleData, startPayment } = props;
    if (result.error) {
      console.log(error);
      // toast(result.error.message, { type: 'error' });
      // setDisableButton(false);
    } else {
      // setDisableButton(true);
      startPayment({ source: result.token.id, vehicleId: vehicleData.id }, addToast, setLoading, history);
    }
    // setDisableButton(false);
  };
  return <TranscationScreen loading={loading} handleSubmit={handleSubmit} />;
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
export default connect(mapStateToProps, mapDispatchToProps)(TranscationContainer);
