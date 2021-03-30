import React from 'react';
import { Modal } from 'antd';
import ReactStars from 'react-rating-stars-component';

import Button from '../Button/index';

import './style.css';
import '../../App.css';
import { Link } from 'react-router-dom';

const SurveyModal = ({
  rating,
  handleSurveyModal,
  isSurveyModalVisible,
  changeRating,
  handleCheckBox,
  handleComment,
  handleSubmitSurvey,
  surveyModalLoading,
}) => {
  return (
    <div className="survey-modal">
      <Modal
        visible={isSurveyModalVisible}
        closable={true}
        title={false}
        footer={null}
        onCancel={() => handleSurveyModal(false)}
        maskClosable={true}
        wrapClassName="survay-modallsss"
        className="survay-modallsss"
        // closeIcon={}
        // bodyStyle={{
        //   width: '100%',
        //   textAlign: 'center',
        //   background: 'linear-gradient(0deg,rgba(27,104,179,0.6) 0%,#1b68b3 99.97%)',
        // }}
      >
        <div className="server-form-container">
          <div className="server-form-heading">
            Save <span className="server-form-price">$5</span> at check out
          </div>
          <div className="server-form-paragraph">
            We value your feedback! Help us improve our product by filling our below questionaire.
          </div>
          <div className="server-form-sub-heading">
            How would you rate Chex<span className="server-form-title">.AI</span> app
          </div>
          <div className="server-form-rating-stars">
            {/* <StarRatings
              starHoverColor="#FF7A00"
              rating={rating}
              starSelectingHoverColor="#FF7A00"
              starRatedColor="#FF7A00"
              changeRating={changeRating}
              starWidthAndHeight="20px"
              numberOfStars={5}
              name="rating"
              starHoverColor="#cecece"
            /> */}

            <ReactStars count={5} onChange={changeRating} size={30} activeColor="#ffd700" />
          </div>
          <div className="server-form-question">
            Which platform would you prefer for vehicle inspections?
          </div>

          <div className="server-form-checkboxes">
            <div>
              <div>
                <div style={{ display: 'flex' }}>
                  <label class="newcontainer">
                    <input onChange={(e) => handleCheckBox('online_services', e)} type="checkbox" />
                    <span class="newcheckmark"></span>
                  </label>
                  <div className="server-form-checkbox-text">
                    Online Service (Chex<span className="server-form-title">.AI</span>)
                  </div>
                </div>
              </div> 

              <div>
                <div style={{ display: 'flex' }}>
                  <label class="newcontainer">
                    <input onChange={(e) => handleCheckBox('face_time', e)} type="checkbox" />
                    <span class="newcheckmark"></span>
                  </label>
                  <div className="server-form-checkbox-text">Facetime/Video Chat</div>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex' }}>
                  <label class="newcontainer">
                    <input onChange={(e) => handleCheckBox('visit_shop', e)} type="checkbox" />
                    <span class="newcheckmark"></span>
                  </label>
                  <div className="server-form-checkbox-text">Visit A Mechanic Shop</div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '-7px' }}>
            <textarea
              onChange={handleComment}
              className="server-form-textarea"
              style={{ resize: 'none' }}
              id="w3review"
              name="w3review"
              placeholder="Any Comments"
              rows="5"
              cols="46"
            ></textarea>
          </div>
          <div style={{ marginTop: '8px' }}>
            <Button
              onClickButton={handleSubmitSurvey}
              loading={surveyModalLoading}
              title={'Next'}
              buttonClass="survey-button"
            />
            <div className="survey-modal-link">
              <Link to="/transcationScreen">Skip and pay full amount</Link>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SurveyModal;
