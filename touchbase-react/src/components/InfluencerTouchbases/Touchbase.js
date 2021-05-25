import React from "react";
import './Touchbase.css'

const Touchbase = props => {

  let title="How to make a webpage with React!"
  let description = "Participants will be able to learn how to use the React library to create a simple webpage. They will learn the basics of HTML and CSS while also using and understanding React Hooks and styling."
  let openSpots = 5;
  let nextDate = "Fri, 21 May 2021"
  let nextTime = "9:00 AM"
  let cost = "19.99"

  return(
    <div className="touchbase-content">
      <div className="touchbase-title">
        {props.title}
      </div>

      <div className="touchbase-description">
        {props.description}
      </div>

      <div className="touchbase-open-spots">
        Spots left: {props.openSpots}
      </div>

      <div className="touchbase-next-iteration">
        Next Available Booking; {props.nextDate} {props.nextTime}
      </div>

      <div className="touchbase-cost">
        Cost: ${props.cost}
      </div>

      <div className="book-it">
        <button className="book-it-button">View Bookings</button>
      </div>

    </div>
  );
}

export default Touchbase;
