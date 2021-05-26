import React from "react";
import './EventTouchbase.css';
import oooicon from '../../images/TouchbaseIcons/one-on-one-icon.png'
import groupicon from '../../images/TouchbaseIcons/group-icon.png'
import grouphangouticon from '../../images/TouchbaseIcons/group-hangout-icon.png'

const EventTouchbase = props => {

  let title="How to make a webpage with React!"
  let description = "Participants will be able to learn how to use the React library to create a simple webpage. They will learn the basics of HTML and CSS while also using and understanding React Hooks and styling."
  let startTime = "3:00 PM"
  let endTime = "4:00 PM"
  let participants = 3
  let type = "Class"

  return (
    <div className="event-touchbase-content">
      <div className="event-touchbase-type">
        <img src={grouphangouticon} className="event-touchbase-icon" ></img>
      </div>
      <div className="event-touchbase-title">
        {props.title}
      </div>
      <div className="event-touchbase-description">
        {props.description}
      </div>
      <div className="event-touchbase-starttime">
        From: {props.startTime}
      </div>
      <div className="event-touchbase-endtime">
        To: {props.endTime}
      </div>
      <div className="event-touchbase-current-participants">
        Current participants signed up: {props.participants}
      </div>
      <div className="event-touchbase-buttons1">
        <button className="event-touchbase-edit-btn">Edit</button>
      </div>
      <div className="event-touchbase-buttons2">
        <button className="event-touchbase-delete-btn">Delete</button>
      </div>
      <div className="event-touchbase-buttons3">
        <button className="event-touchbase-join-btn">Join</button>
      </div>

    </div>
  );
};

export default EventTouchbase;
