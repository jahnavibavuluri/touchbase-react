import React from "react";
import './Booking.css'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { useHistory } from "react-router-dom";
import moment from 'moment';

//import CheckoutForm from './CheckoutForm';

const Booking = props => {

  let date = props.date
  let startTime = props.start
  let endTime= props.end
  let spotsOpen = props.open
  let cost = props.cost
  let iter_id = props.iter_id
  console.log(iter_id)

  const history = useHistory();
  var stripe = window.Stripe('pk_test_51IvNM4ADzUQrLSjDDcIHl8MbsPICPw4vUCMLzLZt0Fuqoz4FS4w1tXcL8Ry3WF05xXxSSGIjNvEpmuyK5zLD4uIS00AnKVh4si');
/*var checkoutButton = document.getElementById('checkout-button');
checkoutButton.addEventListener('click', function() {
  stripe.redirectToCheckout({
    // Make the id field from the Checkout Session creation API response
    // available to this file, so you can provide it as argument here
    // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
    sessionId: '{{CHECKOUT_SESSION_ID}}'
  }).then(function (result) {
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `result.error.message`.
  });
});*/

  function convert(input) {
    return moment(input, 'HH:mm:ss').format('h:mm:ss A');
  }

  const handleCheckout = (event) => {

    fetch(`/api/createCheckout/${iter_id}`)
    .then(response => {
      const statusCode = response.status;
      if (statusCode === 402) {
        history.push('/login')
      } else if (statusCode === 300){
        history.push('/error')
      }
      const data = response.json();
      return Promise.all([statusCode, data]);
    })
    .then((res) => {
      console.log(res)
      if (res[0] === 402) {
        history.push('/login')
      } else {
        console.log(res[1].session_id);
        stripe.redirectToCheckout ({
          sessionId: res[1].session_id,
        }).then(function (result) {

        });
      }
    })
    .catch(error => {
      console.error(error);
      return { name: "network error", description: "" };
    });

  }


  return (
    <div className="ind-content-booking">

      <div className="ind-title-booking">
        {props.tb_title}
      </div>

      <div className="ind-date-booking">
        <div className="ind-meeting-booking-heading">Date: </div>{date}{/*props.date*/}
      </div>

      <div className="ind-start-time-booking">
        <div className="ind-meeting-booking-heading">Start at: </div>{convert(startTime)}{/*props.startTime*/}
      </div>

      <div className="ind-end-time-booking">
        <div className="ind-meeting-booking-heading">End at: </div>{convert(endTime)}{/*props.endTime*/}
      </div>

      <div className="ind-current-part-booking">
        <div className="ind-meeting-booking-heading">Current Participants: </div>{spotsOpen}{/*props.customers*/}
      </div>

      <div className="ind-current-cost-booking">
        ${cost}{/*props.customers*/}
      </div>

      <div className="ind-join-booking">
        <button className="ind-book-button-booking" id="checkout-button" onClick={handleCheckout}>Book it</button>
      </div>



    </div>




    /*<div className="booking-main-content">

      <div className="side right">
        <div className="booking-date">{date}</div>
        <div className="booking-time-start">From: {startTime}</div>
        <div className="booking-time-end">To: {endTime}</div>
        <div className="bookings-spots-open">Spots Left: {spotsOpen}</div>
        <div className="bookings-cost">Cost: ${cost}</div>
      </div>

      <div className="side left">
        <div className="book-it">
          <button className="bookings-it-button">Book it</button>
        </div>
      </div>
    </div>*/
  );
}

export default Booking;
