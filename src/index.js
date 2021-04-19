import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastProvider } from 'react-toast-notifications';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import configureStore from './store/configureStore';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'antd/dist/antd.css';

const store = configureStore({});
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

ReactDOM.render(
  <Elements stripe={stripePromise}>
    <Provider store={store}>
      <ToastProvider autoDismiss={true} autoDismissTimeout={4000} PlacementType="bottom-right">
        <Router>
          <App />
        </Router>
      </ToastProvider>
    </Provider>
  </Elements>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
