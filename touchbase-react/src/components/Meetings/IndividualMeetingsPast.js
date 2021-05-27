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

      <div className="ind-date-past">
        {props.date}
      </div>

      <div className="ind-start-time-past">
        {props.startTime}
      </div>

      <div className="ind-end-time-past">
        {props.endTime}
      </div>

    </div>
  );

}

export default IndividualMeetingPast;
