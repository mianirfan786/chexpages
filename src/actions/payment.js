// import * as types from '../utils/constants';
import { Api } from '../services/configs';
import axios from 'axios';

const headers = {
  Authorization: `Bearer ${localStorage.getItem('token')}`,
  'Content-Type': 'application/json',
};

export function startPayment(params, addToast, setLoading, history) {
  return (dispatch) => {
    setLoading(true);
    axios
      .post(`${Api}/transactions/${params.vehicleId}`, params, { headers })
      .then((resp) => {
        console.log(resp);
        addToast('Transcation has been successfully made', { appearance: 'success' });
        setLoading(false);
        history.push('/thankyouScreen');
      })
      .catch((err) => {
        setLoading(false);
        addToast(`${err.response.data.errors}`, { appearance: 'error' });
      });
  };
}

export function getPaymentPriceInfo(vehicleId, setPrice, setPriceLoading) {
  return (dispatch) => {
    setPriceLoading(true);
    axios
      .get(`${Api}/transactions/user/price/${vehicleId}`, { headers })
      .then((resp) => {
        setPriceLoading(false);
        setPrice(resp.data);
      })
      .catch((err) => {
        setPriceLoading(false);
      });
  };
}
