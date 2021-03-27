/* eslint-disable */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useStripe, useElements, CardNumberElement } from '@stripe/react-stripe-js';
// import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import ActionCreators from '../../actions';
import { VehicalDetailScreen } from '../../Screens';
import { setCompanies } from '../../utils/functions';
import { VehicleDetailBtnContainer } from '../../Screens/VehicleStatusScreen/style';

const VehicleDetailContainer = (props) => {
  const stripe = useStripe();
  const elements = useElements();
  //   const history = useHistory();
  const { addToast } = useToasts();

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
      console.log(result);
      // setDisableButton(true);
      startPayment({ source: result.token.id, vehicleId: vehicleData.id });
    }
    // setDisableButton(false);
  };
  return <VehicalDetailScreen handleSubmit={handleSubmit} />;
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
export default connect(mapStateToProps, mapDispatchToProps)(VehicleDetailContainer);
