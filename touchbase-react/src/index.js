import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import './index.css';
import CheckoutForm from './components/Stripe/CheckoutForm';
import App from './App';

/*const stripePromise = loadStripe('pk_test_51IvNM4ADzUQrLSjDDcIHl8MbsPICPw4vUCMLzLZt0Fuqoz4FS4w1tXcL8Ry3WF05xXxSSGIjNvEpmuyK5zLD4uIS00AnKVh4si', {
  stripeAccount: '{{CONNECTED_STRIPE_ACCOUNT_ID}}'
});

function Stripe() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};*/


ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);


{/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
