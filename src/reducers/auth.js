import createReducer from '../store/createReducer';
import * as types from '../utils/constants';

const initialState = {
  currentUser: JSON.parse(localStorage.getItem('currentUser')),
  vehicleData: JSON.parse(localStorage.getItem('vehicleData')),
  isAuthenticated: false,
  loginMessage: false,
  isAuthLoading: false,
};

const auth = createReducer(initialState, {
  [types.SET_CURRENT_USER](state, action) {
    return {
      ...state,
      currentUser: action.currentUser,
    };
  },
  [types.SET_ISAUTHENTICATED](state, action) {
    return {
      ...state,
      isAuthenticated: action.isAuthenticated,
    };
  },
  [types.SET_VEHCILE_DATA](state, action) {
    return {
      ...state,
      vehicleData: action.vehicleData,
    };
  },
  [types.IS_AUTH_LOADING](state, action) {
    return {
      ...state,
      isAuthLoading: action.isAuthLoading,
    };
  },
  [types.SET_COMPANIES](state, action) {
    return {
      ...state,
      companies: action.companies,
    };
  },
});
export default auth;
