import * as types from '../utils/constants';
import Api from '../services/api';

function setIsAuthenticated(params) {
  return {
    type: types.SET_ISAUTHENTICATED,
    isAuthenticated: params,
  };
}

function setCurrentUser(data) {
  return {
    type: types.SET_CURRENT_USER,
    currentUser: data,
  };
}

export function login(params, history, addToast) {
  return (dispatch) =>
    Api.post('auth/login', params)
      .then((resp) => {
        // dispatch(setCurrentUser(resp.data));
        // dispatch(setIsAuthenticated(true));
        history.push('/dashboard');
      })
      .catch((err) => {
        addToast('Error', { appearance: 'error' });
        // dispatch(setAuthError(err.message));
      });
}
