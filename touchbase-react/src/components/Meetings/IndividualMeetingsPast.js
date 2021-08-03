import React, { useEffect, useState } from "react";
import './IndividualMeetingsPast.css'
import favicon from '../../images/TouchbaseIcons/favicon-black.png'
import { MenuInfluencer } from '../Menu/MenuInfluencer.js'
import { MenuCustomer } from '../Menu/MenuCustomer.js'
import moment from 'moment';

const IndividualMeetingPast = props => {

  function convert(input) {
    return moment(input, 'HH:mm:ss').format('h:mm:ss A');
  }

  const formatedDate = moment(props.date).format('YYYY-MM-DD')
  console.log("moment is: " + formatedDate)
  const localStart = new Date(String(formatedDate).substring(0, 17) + "T" + props.startTime + ".000Z").toString().substring(16, 25)
  const localEnd = new Date(String(formatedDate).substring(0, 17) + "T" + props.endTime + ".000Z").toString().substring(16, 25)
  console.log(localStart)
  console.log(localEnd)

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
        <div className="ind-meeting-past-heading">Start at: </div>{convert(localStart)}
      </div>

      <div className="ind-end-time-past">
        <div className="ind-meeting-past-heading">End at: </div>{convert(localEnd)}
      </div>

    </div>
  );

}

export default IndividualMeetingPast;
