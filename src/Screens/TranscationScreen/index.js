import React from 'react';
import { Link } from 'react-router-dom';
import { CardExpiryElement, CardNumberElement, CardCvcElement } from '@stripe/react-stripe-js';
// import { IoIosArrowBack } from 'react-icons/io';

import { Button } from '../../Components';

import './style.css';
import '../../App.css';

const TranscationScreen = ({ priceLoading, handleSubmit, loading, price, buttonDisable }) => {
  return (
    <div className="trans-container">
      <div className="transcation-container">
        <div className="transaction-screen-header" style={{ justifyContent: 'center' }}>
          {/* <Link style={{ color: 'white' }} to="/vehicleinspection">
            <IoIosArrowBack size={32} color="white" />
          </Link> */}
          <></>
          <div className="header-text">Payment</div>
          <div></div>
        </div>
        <div className="transaction-payment">
          {priceLoading ? (
            <div>Loading..</div>
          ) : price?.USD ? (
            <>
              ${`${price?.USD}`.split('.')[0]}
              <span className="transaction-amount"> .{`${price?.USD}`.split('.')[1]}</span>
            </>
          ) : (
            <>
              19.<span className="transaction-amount">99</span>
            </>
          )}
        </div>

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
            <input className="cardholder-input" />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
            <div style={{ width: '42%' }}>
              <div className="transaction-input-field">
                <div className="input-field-name">Expiry Date</div>
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

            <div style={{ width: '54%' }}>
              <div className="transaction-input-field">
                <div className="input-field-name">CVC</div>
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
          </div>
          <Button loading={loading} style={{ marginTop: 30 }} title={'Submit'} disabled={buttonDisable} onClickButton={handleSubmit} />
          <div></div>
          <Link style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }} to="/vehicleinspection">
            go back to inspections page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TranscationScreen;
