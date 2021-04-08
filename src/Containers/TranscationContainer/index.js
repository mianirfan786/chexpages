/* eslint-disable */

import React, { useEffect, useState } from 'react';
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

  const [price, setPrice] = useState(false);
  const [priceLoading, setPriceLoading] = useState(false);

  const [loading, setLoading] = useState(false);
  const [buttonDisable, setButtonDisable] = useState(false);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const { getPaymentPriceInfo, vehicleData } = props;
    if (user?.updates || user?.updates === null || user?.updates === undefined) {
      window.location.replace('/logoutForChanges');
    }
    getPaymentPriceInfo(user?.vehicles[0]?.id, setPrice, setPriceLoading);
  }, []);
  const handleSubmit = async () => {
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardNumberElement);
    setButtonDisable(true);
    const result = await stripe.createToken(card);
    const { vehicleData, startPayment } = props;
    if (result.error) {
      addToast(`${result.error.message}`, { appearance: 'error' });
      setButtonDisable(false);
      // toast(result.error.message, { type: 'error' });
      // setDisableButton(false);
    } else {
      // setDisableButton(true);
      startPayment({ source: result.token.id, vehicleId: vehicleData.id }, addToast, setLoading, history, setButtonDisable);
    }
    // setDisableButton(false);
  };
  return <TranscationScreen priceLoading={priceLoading} buttonDisable={buttonDisable} price={price} loading={loading} handleSubmit={handleSubmit} />;
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
