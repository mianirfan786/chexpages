import { combineReducers } from 'redux';
import authReducer from './auth';

export default combineReducers(
  Object.assign({
    auth: authReducer,
  })
);
