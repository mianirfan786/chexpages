/*eslint-disable */
import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ActionCreators from '../../actions';
import { VehicleAfterReviewingScreen } from '../../Screens';

const VehicleAfterReviewingContainer = (props) => {
    // const history = useHistory();
    const { match, getVehicleDetails, getFileDetails, vehicleDetails, filesDetails } = props;
    const [loading, setLoading] = useState(false);
    const [isModalVisible, setModalValue] = useState(false);
    const [url, setUrl] = useState('');
    const [type, setType] = useState('');



    useEffect(() => {
        getVehicleDetails(match?.params?.id, setLoading);
        getFileDetails(match?.params?.id, setLoading);
    }, [])

    const handleModal = async (Url, type) => {
        await setUrl(Url);
        await setType(type);
        setModalValue(true);
    };

    const handleModalClose = () => {
        setModalValue(false);
        var video = document.getElementById('myVideo');
        video?.pause();
    };
    return (
        <div>
            <VehicleAfterReviewingScreen
                loading={loading}
                handleModal={handleModal} handleModalClose={handleModalClose}
                vehicleDetails={vehicleDetails} filesDetails={filesDetails}
                isModalVisible={isModalVisible}
                url={url}
                type={type}
            />
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