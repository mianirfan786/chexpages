import {Rate} from "antd";
import React from "react";
import './style.css'

const ReviewCard = (props) => {
    return (
        <div className='review-card-container'>
            <p className='review-text'>{props.reviewText}</p>
            <div className='name-rate-container'>
                <p className='reviewer-name'>{props.reviewerName}</p>
                <Rate allowHalf defaultValue={2.5} />
            </div>
        </div>
    )
}

export default ReviewCard
