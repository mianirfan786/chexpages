/*eslint-disable */
import React, { useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ActionCreators from '../../actions';
import { VehicleAfterReviewingScreen } from '../../Screens';

const VehicleAfterReviewingContainer = (props) => {
    // const history = useHistory();
    const { match, getVehicleDetails, getFileDetails, vehicleDetails, filesDetails } = props;
    // const [loading, setLoading] = useState(false);

    useEffect(() => {
        getVehicleDetails(match?.params?.id);
        getFileDetails(match?.params?.id);
    }, [])
    console.log("vehicleDetails :: ", vehicleDetails);
    console.log("getFileDetails :: ", filesDetails);


    return (
        <div>
            <VehicleAfterReviewingScreen vehicleDetails={vehicleDetails} filesDetails={filesDetails} />
        </div>
    )
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
    console.log(" state : ", state);
    return {
        // vehicleData: state.auth.vehicleData,
        isLoading: state.auth.isAuthLoading,
        vehicleDetails: state?.vehicleInstruction?.vehicleDetails,
        filesDetails: state?.vehicleInstruction?.fileDetails
        // companies: state?.auth?.companies?.data,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(VehicleAfterReviewingContainer);