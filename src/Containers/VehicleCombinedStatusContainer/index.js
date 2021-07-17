import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ActionCreators from '../../actions';
import { VehicleCombineStatusScreen } from '../../Screens';

const VehicleCombinedStatusContainer = (props) => {
  const { getInspectionByStatus } = props;

  // const { loading, setLoading } = useState(false);

  useEffect(() => {
    getInspectionByStatus({
      status: 'REVIEWED',
    });
  });

  const handleStatus = (status) => {
    getInspectionByStatus({
      status: status,
    });
  };

  return (
    <div>
      <VehicleCombineStatusScreen handleStatus={handleStatus} />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    // vehicleData: state.auth.vehicleData,
    // isLoading: state.auth.isAuthLoading,
    // companies: setCompanies(state.auth.companies),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(VehicleCombinedStatusContainer);
