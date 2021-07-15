import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom"
import './IndividualMeetingUpcoming.css'
import favicon from '../../images/TouchbaseIcons/favicon-black.png'
import { MenuInfluencer } from '../Menu/MenuInfluencer.js'
import { MenuCustomer } from '../Menu/MenuCustomer.js'
import { differenceInCalendarDays } from 'date-fns';
import PopupDeleteIteration from '../Popup/PopupDeleteIteration.js'
import moment from 'moment';

const IndividualMeetingUpcoming = props => {

  const [isInfluencer, setInfluencer] = useState(false)

  useEffect(() => {
      fetch('/api/isLoggedIn')
    .then(response => {
      const statusCode = response.status;
      const data = response.json();
      return Promise.all([statusCode, data]);
    })
    .then((res) => {
      if (res[0] === 202) {
        setInfluencer(true)
      }
      console.log(res);
    })
    .catch(error => {
      console.error(error);
      return { name: "network error", description: "" };
    });
  },[])
  //console.log(props.date)
  let button;
  let deletePopup;
  let buttonCancel = null;
  const history = useHistory();
  var today = new Date(),
  time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  let date = Date.now()
  let date2 = new Date(props.date)
  let tb_id = props.tb_id
  let iter_id = props.iter_id
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [dailyLink, setDailyLink] = useState('')

  const toggleDelete = () => {
    setIsOpenDelete(!isOpenDelete);
  }

  const isValidDate = a => b => {
    return differenceInCalendarDays(a, b);
  }

  const handleLink = (event) => {
    window.location = dailyLink
  }

  function convert(input) {
    return moment(input, 'HH:mm:ss').format('h:mm:ss A');
  }
  /*console.log("date is: " + date)
  console.log("date2 is: " + date2)
  console.log(differenceInCalendarDays(date2, date))*/

  if (differenceInCalendarDays(date2, date) === 0 || ((differenceInCalendarDays(date2, date) === 1) && (props.startTime < time))) {
    console.log(differenceInCalendarDays(date2, date) + "for " + date2)

    if (isInfluencer === true) {
      fetch(`/api/startMeeting/${iter_id}`)
        .then(response => {
          const statusCode = response.status;
          const data = response.json();
          return Promise.all([statusCode, data]);
        })
        .then((res, data) => {
          console.log(res);
          setDailyLink(res[1].url)
      //console.log(influencerDashboard);
      })
      .catch(error => {
        console.error(error);
        return { name: "network error", description: "" };
      });
    } else {
      fetch(`/api/joinMeeting/${iter_id}`)
        .then(response => {
          const statusCode = response.status;
          const data = response.json();
          return Promise.all([statusCode, data]);
        })
        .then((res, data) => {
          console.log(res);
          setDailyLink(res[1].url)
      //console.log(influencerDashboard);
      })
      .catch(error => {
        console.error(error);
        return { name: "network error", description: "" };
      });
    }


    button = <button className="ind-join-button" onClick={handleLink} >Join</button>
    buttonCancel = <button className="ind-cancel-two-button" onClick={toggleDelete} >Cancel</button>
    if (isInfluencer === true) {
      deletePopup = <PopupDeleteIteration handleClose={toggleDelete} tb_id={tb_id} iter_id={iter_id} content="Are you sure you want to cancel this booking?"/>
    } else {
      //customer canceling after the 24 hour period will not get a refund
      deletePopup = <PopupDeleteIteration handleClose={toggleDelete} tb_id={tb_id} iter_id={iter_id} content="Are you sure you want to cancel this booking? You will not get a refund as you are canceling within 24 hours of this booking."/>
    }


  } else {
    button = <button className="ind-cancel-button" onClick={toggleDelete}>Cancel</button>
    //if this is customer cancelling before the 24 hour period, they get a 80% refund
    if (isInfluencer === false) {
      deletePopup = <PopupDeleteIteration handleClose={toggleDelete} tb_id={tb_id} iter_id={iter_id} content="Are you sure you want to cancel this booking? You will only get a 80% refund!"/>
    }

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
        <div className="ind-meeting-upcoming-heading">Start at: </div>{convert(props.startTime)}
      </div>

      <div className="ind-end-time">
        <div className="ind-meeting-upcoming-heading">End at: </div>{convert(props.endTime)}
      </div>

      <div className="ind-join">
        {button}
        <div>{buttonCancel}</div>
      </div>

      {isOpenDelete && deletePopup}


    </div>
  );

}

export default IndividualMeetingUpcoming;
