import React, { useState } from 'react';
import { Form, Input, Button, Select } from 'antd';
import ClipLoader from 'react-spinners/ClipLoader';
import { BsChevronLeft } from 'react-icons/bs';
import StarRatings from 'react-star-ratings';

import './style.css';
import '../../App.css';

const ServerFormScreen = ({ handleSubmit, isLoading, companies }) => {
  const [rating, setNewRating] = useState(0)
  const changeRating = (newRating, name) => {
    setNewRating(newRating)
  }
  return (
    <div className="server-form-container">
      <div className="server-form-heading">Save <span className="server-form-price">$5</span> at check out</div>
      <div className="server-form-paragraph">We value your feedback! Help us improve our product by filling our below questionaire.</div>
      <div className="server-form-sub-heading">How would you rate Chex<span className="server-form-title">.AI</span> app</div>
      <div className="server-form-rating-stars">
        <StarRatings
          rating={rating}
          starRatedColor="#FF7A00"
          changeRating={changeRating}
          starWidthAndHeight="20px"
          className="salman"
          numberOfStars={5}
          name='rating'
          starHoverColor="#cecece"
        />
      </div>
      <div className="server-form-question">Which platform would you prefer for vehicle inspections?</div>

      <div className="server-form-checkboxes">
        <div>

          <div>
            <div style={{ display: 'flex' }}>
              <label class="newcontainer">
                <input type="checkbox" checked="false" />
                <span class="newcheckmark"></span>
              </label>
              <div className="server-form-checkbox-text">Online Service (Chex<span className="server-form-title">.AI</span>)</div>
            </div>
          </div>


          <div>
            <div style={{ display: 'flex' }}>
              <label class="newcontainer">
                <input type="checkbox" checked="false" />
                <span class="newcheckmark"></span>
              </label>
              <div className="server-form-checkbox-text">Facetime/Video Chat</div>
            </div>
          </div>


          <div>
            <div style={{ display: 'flex' }}>
              <label class="newcontainer">
                <input type="checkbox" checked="false" />
                <span class="newcheckmark"></span>
              </label>
              <div className="server-form-checkbox-text">Visit A Mechanic Shop</div>
            </div>
          </div>
        </div>

      </div>

      <div style={{ textAlign: 'center', marginTop: '16px' }}>
        <textarea className="server-form-textarea" style={{ resize: 'none' }} id="w3review" name="w3review" placeholder="Any Comments" rows="5" cols="46">

        </textarea>
      </div>

    </div>
  );
};

export default ServerFormScreen;