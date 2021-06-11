import React from "react";
import './Booking.css'

const Booking = props => {

  let date = "Fri, 21 May 2021"
  let startTime = "9:00 AM"
  let endTime="9:15 AM"
  let spotsOpen = 3
  let cost = "19.99"

  return (
    <div className="ind-content-booking">

      <div className="ind-title-booking">
        Touchbase Title {/*props.title*/}
      </div>

      <div className="ind-date-booking">
        <div className="ind-meeting-booking-heading">Date: </div>{date}{/*props.date*/}
      </div>

      <div className="ind-start-time-booking">
        <div className="ind-meeting-booking-heading">Start at: </div>{startTime}{/*props.startTime*/}
      </div>

      <div className="ind-end-time-booking">
        <div className="ind-meeting-booking-heading">End at: </div>{endTime}{/*props.endTime*/}
      </div>

      <div className="ind-current-part-booking">
        <div className="ind-meeting-booking-heading">Current Participants: </div>{spotsOpen}{/*props.customers*/}
      </div>

      <div className="ind-current-cost-booking">
        {cost}{/*props.customers*/}
      </div>

      <div className="ind-join-booking">
        <button className="ind-book-button-booking">Book it</button>
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
