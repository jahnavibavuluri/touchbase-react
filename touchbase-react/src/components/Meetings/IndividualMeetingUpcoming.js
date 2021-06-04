import React, { useEffect, useState } from "react";
import './IndividualMeetingNew.css'
import favicon from '../../images/TouchbaseIcons/favicon-black.png'
import { MenuInfluencer } from '../Menu/MenuInfluencer.js'
import { MenuCustomer } from '../Menu/MenuCustomer.js'

const IndividualMeetingUpcoming = props => {

  console.log(props.customers)

  return (
    <div className="ind-content">

      <div className="ind-title">
        {props.title}
      </div>

      <div className="ind-type">
        {props.type}
      </div>

      <div className="ind-current-part">
        {props.customers}
      </div>

      <div className="ind-date">
        {props.date}
      </div>

      <div className="ind-start-time">
        {props.startTime}
      </div>

      <div className="ind-end-time">
        {props.endTime}
      </div>

      <div className="ind-join">
        <button className="ind-join-button">Join</button>
      </div>

    </div>
  );

}

export default IndividualMeetingUpcoming;
