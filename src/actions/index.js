import * as Auth from './auth';
import * as vehicleinspection from './vehicleInspection';
import * as Payment from './payment';
const ActionCreators = Object.assign({}, Auth, vehicleinspection, Payment);

export default ActionCreators;
