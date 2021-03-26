import * as Auth from './auth';
import * as vehicleinspection from './vehicleInspection';

const ActionCreators = Object.assign({}, Auth, vehicleinspection);

export default ActionCreators;
