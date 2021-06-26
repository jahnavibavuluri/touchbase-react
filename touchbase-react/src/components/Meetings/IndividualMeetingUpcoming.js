import React, { useEffect, useState } from "react";
import './IndividualMeetingNew.css'
import favicon from '../../images/TouchbaseIcons/favicon-black.png'
import { MenuInfluencer } from '../Menu/MenuInfluencer.js'
import { MenuCustomer } from '../Menu/MenuCustomer.js'
import { differenceInCalendarDays } from 'date-fns';
import PopupDeleteIteration from '../Popup/PopupDeleteIteration.js'

const IndividualMeetingUpcoming = props => {

  //console.log(props.date)
  let button;
  let date = Date.now()
  let date2 = new Date(props.date)
  let tb_id = props.tb_id
  let iter_id = props.iter_id
  const [isOpenDelete, setIsOpenDelete] = useState(false);

  const toggleDelete = () => {
    setIsOpenDelete(!isOpenDelete);
  }

  const isValidDate = a => b => {
    return differenceInCalendarDays(a, b);
  }

  /*console.log("date is: " + date)
  console.log("date2 is: " + date2)
  console.log(differenceInCalendarDays(date2, date))*/

  if (differenceInCalendarDays(date2, date) < 1) {
    button = <button className="ind-join-button">Join</button>
  } else {
    button = <button className="ind-cancel-button" onClick={toggleDelete}>Cancel</button>
  }

  return (
    <div className="ind-content">

      <div className="ind-title">
        {props.title}
      </div>

      <div className="ind-type">
        {props.type}
      </div>

      <div className="ind-current-part">
        <div className="ind-meeting-upcoming-heading">Current Participants: </div>{props.customers}
      </div>

      <div className="ind-date">
        <div className="ind-meeting-upcoming-heading">Date: </div>{props.date}
      </div>

      <div className="ind-start-time">
        <div className="ind-meeting-upcoming-heading">Start at: </div>{props.startTime}
      </div>

      <div className="ind-end-time">
        <div className="ind-meeting-upcoming-heading">End at: </div>{props.endTime}
      </div>

      <div className="ind-join">
        {button}
      </div>

      {isOpenDelete && <PopupDeleteIteration handleClose={toggleDelete} tb_id={tb_id} iter_id={iter_id}/>}


    </div>
  );

}

export default IndividualMeetingUpcoming;
