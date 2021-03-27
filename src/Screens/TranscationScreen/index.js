import React from 'react';
import { Header, Button } from '../../Components';
import { CardExpiryElement, CardNumberElement, CardCvcElement } from '@stripe/react-stripe-js';

import './style.css';
import '../../App.css';

const TranscationScreen = ({ handleSubmit }) => {
  return (
    <div className="transcation-container">
      <Header />
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
      <Button title={'Submit'} onClickButton={handleSubmit} />
    </div>
  );
};

export default TranscationScreen;
