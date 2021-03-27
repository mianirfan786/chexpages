// import * as types from '../utils/constants';
import { Api } from '../services/configs';
import axios from 'axios';

const headers = {
  Authorization: `Bearer ${localStorage.getItem('token')}`,
  'Content-Type': 'application/json',
};

// function setIsAuthenticated(params) {
//   return {
//     type: types.SET_ISAUTHENTICATED,
//     isAuthenticated: params,
//   };
// }

export function startPayment(params) {
  return (dispatch) => {
    axios
      .post(`${Api}/transactions/${params.vehicleId}`, params, { headers })
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
