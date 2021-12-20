import React from 'react';
import './style.css';


const PricingCard = (props) => {
    return (
        <div className="priceCardContainer">
            <div className="pricetagBg"  style={{backgroundColor: props.colorCode}}>
                <p className="pricetagText">{props.tagText}</p>
            </div>
            {/*<div className="cardSecondContainer">*/}


                 <h3 className="pricecardHeading">{props.priceText}</h3>

            <p className="pricecardParagraph">
                {props.ParagraphText}
            </p>


            {/*</div>/\*/}
        </div>
    );
};

export default PricingCard;
