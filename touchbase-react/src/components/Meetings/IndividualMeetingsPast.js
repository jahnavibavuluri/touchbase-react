import React, { useEffect, useState } from "react";
import './IndividualMeetingsPast.css'
import favicon from '../../images/TouchbaseIcons/favicon-black.png'
import { MenuInfluencer } from '../Menu/MenuInfluencer.js'
import { MenuCustomer } from '../Menu/MenuCustomer.js'

const IndividualMeetingPast = props => {

  return (
    <div className="ind-content-past">

      <div className="ind-title-past">
        {props.title}
      </div>

      <div className="ind-type-past">
        {props.type}
      </div>

      <div className="ind-part-past">
        <div className="ind-meeting-past-heading">Participants: </div>{props.customers}
      </div>

      <div className="ind-date-past">
        <div className="ind-meeting-past-heading">Date: </div>{props.date}
      </div>

      <div className="ind-start-time-past">
        <div className="ind-meeting-past-heading">Start at: </div>{props.startTime}
      </div>

      <div className="ind-end-time-past">
        <div className="ind-meeting-past-heading">End at: </div>{props.endTime}
      </div>

    </div>
  );

}

export default IndividualMeetingPast;
