import React from "react";
import './IndividualMeeting.css';
import groupicon from '../../images/TouchbaseIcons/group-icon.png'

const IndividualMeeting = props => {
  return (
    <div className="individual-meeting">



      <div className="meeting-content">
        <div className="image">
          <img src={groupicon} className="icon"></img>
        </div>
        <div className="type">
          {props.type} Touchbase
        </div>
        <div className="title">
          {props.title}
        </div>
        <div className="date">
          {props.date}
        </div>
        <div className="start-time">
          From: {props.startTime}
        </div>
        <div className="end-time">
          To: {props.endTime}
        </div>
        <div className="button">
          <button className="join-button" type="button">Join</button>
        </div>

        </div>


      <br/>
    </div>
  );
};

export default IndividualMeeting;


/*
<div className="touchbase-type">
  <div className="touchbase-type-name">
    {props.type}
  </div>
  <div className="touchbase-type-icon">
    <img src={props.icon} className="touchbase-icon" ></img>
  </div>
</div>

<div className="touchbase-info">
  <div className="touchbase-date">
    {props.date}
  </div>
  <div className="touchbase-time">
    {props.time}
  </div>
  <div className="touchbase-name">
    {props.title}
  </div>
  <div className="touchbase-join-button">
    <button className="join-button" type="button">Join</button>
  </div>
</div>
*/
