import React, { useEffect, useState } from "react";
import './EventPopup.css';
import EventTouchbase from './EventTouchbase.js'

const EventPopup = props => {

  //const [eventDetails, setEvent] = useState({})

  let dict = props.dict[1];
  console.log("the dict is: ")
  console.log(dict)
  //setEvent(dict[1])
  //console.log(eventDetails)
  //console.log(dict[1][0].cost)

  return (
    <div>
    {dict != null && dict != undefined  && <div className="event-popup-box">
      <div className="event-box">
        <span className="event-close-icon" onClick={props.handleClose}>x</span>

        <div >
          {Object.entries(dict).map( ([key, value]) => {
            return (
              <EventTouchbase title={value.title} key={key} description={value.description} startTime={value.startTime} endTime={value.endTime} participants={value.currentParticipants}/>
            )
          })}
        </div>
      </div>
    </div>}
    </div>
  );
};

export default EventPopup;
