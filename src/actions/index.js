import * as Auth from './auth';
import * as vehicleinspection from './vehicleInspection';
import * as Payment from './payment';
import * as contactUs from './contactUs';
const ActionCreators = Object.assign({}, Auth, vehicleinspection, Payment, contactUs);

export default ActionCreators;
