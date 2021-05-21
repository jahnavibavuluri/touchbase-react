import React from "react";
import './IndividualMeeting.css';

const IndividualMeeting = props => {
  return (
    <div className="individual-meeting">
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
    </div>
  );
};

export default IndividualMeeting;
