import { combineReducers } from 'redux';
import authReducer from './auth';
import vehicleInsturctionsReducer from './vehicleInsturctions';

export default combineReducers(
  Object.assign({
    auth: authReducer,
    vehicleInstruction: vehicleInsturctionsReducer,
  })
);
