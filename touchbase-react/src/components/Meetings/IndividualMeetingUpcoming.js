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
  const history = useHistory();
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

  if (differenceInCalendarDays(date2, date) < 1) {

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
        <div className="ind-meeting-upcoming-heading">Start at: </div>{convert(props.startTime)}
      </div>

      <div className="ind-end-time">
        <div className="ind-meeting-upcoming-heading">End at: </div>{convert(props.endTime)}
      </div>

      <div className="ind-join">
        {button}
      </div>

      {isOpenDelete && <PopupDeleteIteration handleClose={toggleDelete} tb_id={tb_id} iter_id={iter_id}/>}


    </div>
  );

}

export default IndividualMeetingUpcoming;
