import React from 'react';
import { Header, Button } from '../../Components';
import { CardExpiryElement, CardNumberElement, CardCvcElement } from '@stripe/react-stripe-js';
import { BsChevronLeft } from 'react-icons/bs';

import './style.css';
import '../../App.css';

const TranscationScreen = ({ handleSubmit }) => {
  return (
    <div className="container">
      <div className="transcation-container">
        {/* <Header /> */}
        <div className="transaction-screen-header">
          <BsChevronLeft className="header-icon" />
          <div className="header-text">Payment info</div>
          <div></div>
        </div>
        <div className="transaction-payment">$19.<span className="transaction-amount">99</span></div>
        <div className="transaction-form-container">
          <div className="transaction-input-field">
            <div className="input-field-name">Card number</div>
            <CardNumberElement
              // onChange={(e) => setFields(e.empty)}
              options={{
                style: {
                  base: {
                    backgroundColor: '#E7EEF5',
                    fontSize: '20px',
                    ':disabled': {
                      color: '#aab7c4',
                    },
                    color: '#424770',
                    '::placeholder': {
                      color: '#aab7c4',
                    },
                  },

                  invalid: {
                    color: '#9e2146',
                  },
                },
              }}
            />
          </div>
          <div className="transaction-input-field">
            <div className="input-field-name">Cardholder Name</div>
            <input />
          </div>
          {/* <div className="transaction-input-field">
            <div className="input-field-name">Expire Date</div>
            <CardCvcElement
              // onChange={(e) => setFields(e.empty)}
              options={{  
                style: {
                  base: {
                    fontSize: '20px',
                    backgroundColor: '#E7EEF5',
                    color: '#424770',
                    '::placeholder': {
                      color: '#aab7c4',
                    },
                  },
                  invalid: {
                    color: '#9e2146',
                  },
                },
              }}
            />
          </div> */}

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>

            <div style={{ width: '54%' }}>

              <div className="transaction-input-field">
                <div className="input-field-name">Expire Date</div>
                <CardCvcElement
                  // onChange={(e) => setFields(e.empty)}
                  options={{
                    style: {
                      base: {
                        fontSize: '20px',
                        backgroundColor: '#E7EEF5',
                        color: '#424770',
                        '::placeholder': {
                          color: '#aab7c4',
                        },
                      },
                      invalid: {
                        color: '#9e2146',
                      }, 
                    },
                  }}
                />
              </div>
            </div>
            <div style={{ width: '42%' }}>
              <div className="transaction-input-field">
                <div className="input-field-name">CVV</div>
                <CardExpiryElement
                  // onChange={(e) => setFields(e.empty)}
                  options={{
                    style: {
                      base: {
                        fontSize: '20px',
                        backgroundColor: '#E7EEF5',
                        color: '#424770',
                        '::placeholder': {
                          color: '#aab7c4',
                        },
                      },
                      invalid: {
                        color: '#9e2146',
                      },
                    },
                  }}
                />
              </div>
            </div>
          </div>
          <Button title={'Submit'} onClickButton={handleSubmit} />
          <div>

          </div>

        </div>



      </div>
    </div>
  );
};

export default TranscationScreen;
