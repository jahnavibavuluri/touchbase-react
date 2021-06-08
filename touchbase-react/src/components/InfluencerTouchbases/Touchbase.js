import React from 'react';
import './Touchbase.css';
import { useHistory } from "react-router-dom";


const Touchbase = props => {

  const history = useHistory();

  const handleInteration = (event) => {
    history.push("/seller/" + props.influencer_id + "/iterations/" + props.touchbase_id);
  }

  return(
    <div className="my-touchbase-content-ind">
      <div className="my-touchbase-content-ind-title">{props.title}</div>
      <div className="my-touchbase-content-ind-description">{props.description}</div>
      <div><b>Cost</b>: ${props.cost}</div>
      <div><b>Open Spots</b>: {props.spots}</div>
      <div><b>Next Booking</b>: {props.nextDate} at {props.nextTime}</div>
      {/*<div className="my-touchbase-content-buttons">
        <button className="my-touchbase-content-edit">Edit</button>
        <button className="my-touchbase-content-delete">Delete</button>
      </div>href= {"/seller/" + value.id}*/}
      <button className="view-bookings" href={"/seller/" + props.influencer_id + "/iterations/" + props.touchbase_id} onClick={handleInteration}>View Bookings</button>
    </div>
  );

}

export default Touchbase;




/*import React from "react";
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

export default Touchbase;*/
