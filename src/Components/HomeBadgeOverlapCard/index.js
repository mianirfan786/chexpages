import React from "react";
import './style.css'
const HomeBadgeOverlapCard = (props) => {
    return(
        <div className="cardContainer" style={{backgroundColor: props.bgColor}}>
            <props.iconName size={32} color="white" className="iconStyle"/>
            <p className='cardHeading'>{props.title}</p>
            <p className='description'>{props.description}</p>
        </div>
    )
}

export default HomeBadgeOverlapCard
