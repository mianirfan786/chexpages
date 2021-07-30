import React from 'react';
import './style.css';

import { BiCheck } from 'react-icons/bi';
import { IoIosClose } from 'react-icons/io'

import AfterReviewingHeaderComponent from '../../Components/AfterReviewingHeaderComponent';
import AfterReviewingScreenProductCardComponent from '../../Components/AfterReviewingScreenProductCardComponent';

const VehicleAfterReviewingScreen = ({ vehicleDetails, filesDetails }) => {

    return (
        <div className="after-reviewing-main_container">
            <div className="container">
                <div className="after-reviewing-content-main_container">
                    <AfterReviewingHeaderComponent />
                    <div className="after-reviewing-white_container">
                        <div className="after-reviewing-wrap_container">
                            {filesDetails?.map((item) => {
                                return (
                                    <AfterReviewingScreenProductCardComponent item={item} />
                                );
                            })}
                        </div>
                        <div className="border-align-container">
                            <div className="after-reviewing-bottom_border" />
                        </div>
                        {vehicleDetails?.vehicle?.UserVehicles?.vehicleDoors ?
                            <div className="no-of-door_container">
                                <div className="no-of-door_text">No of Doors : {vehicleDetails?.vehicle?.UserVehicles?.vehicleDoors}</div>
                            </div>
                            : null
                        }
                        <textarea className="text-area-container" type="textarea" placeholder="Discription" />
                        {vehicleDetails?.finalStatus ? vehicleDetails?.finalStatus === true ?
                            <>
                                <div className="final-status-container">
                                    <div className="final-status-text">Final Status</div>
                                    <div className="pass-container">
                                        <div className="checked-icon-container">
                                            <BiCheck color="white" size={16} />
                                        </div>
                                        <div className="pass-text">Pass</div>
                                    </div>
                                </div>
                            </>
                            :
                            vehicleDetails?.finalStatus === false ?
                                <>
                                    <div className="final-status-container">
                                        <div className="final-status-text">Final Status</div>
                                        <div className="pass-container">
                                            <div className="Unchecked-icon-container">
                                                <IoIosClose color="white" size={20} />
                                            </div>
                                            <div className="pass-text">Fail</div>
                                        </div>
                                    </div>
                                </>
                                : null : null}

                    </div>
                </div>
            </div>
        </div>
    );
};
export default VehicleAfterReviewingScreen;
