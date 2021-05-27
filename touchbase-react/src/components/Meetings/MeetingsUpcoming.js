import React, { useEffect, useState } from "react";
import './MeetingsNew.css'
import favicon from '../../images/TouchbaseIcons/favicon-black.png'
import { MenuInfluencer } from '../Menu/MenuInfluencer.js'
import { MenuCustomer } from '../Menu/MenuCustomer.js'
import IndividualMeetingUpcoming from './IndividualMeetingUpcoming'

export const MeetingsUpcoming = props => {

  let dashboard;
  const [isInfluencer, setInfluencer] = useState(false);
  const [upcomingMeetings, setUpcomingMeetings] = useState({});

  const handleInfluencer = (event) => {
    setInfluencer(true);
  }

  useEffect(() => {
    fetch('/dashboard')
  .then(response => {
    const statusCode = response.status;
    return Promise.all([statusCode]);
  })
  .then((res) => {
    if (res[0] === 200) {
      console.log("customer is logged in!")
    } else if (res[0] === 202) {
      console.log("influencer is logged in!")
      handleInfluencer()
    }
    console.log(res);
    //console.log(influencerDashboard);
  })
  .catch(error => {
    console.error(error);
    return { name: "network error", description: "" };
  });
},[])

  useEffect(() => {
    fetch('/profile/meetings')
    .then(response => {
      const statusCode = response.status;
      const data = response.json();
      return Promise.all([statusCode, data]);
    })
    .then((res, data) => {
      console.log(res[1]);
      setUpcomingMeetings(res[1].future_iterations)
      //setMeetings(res[1].iterations)
    })
    .catch(error => {
      console.error(error);
      return {name: "network error", description:""};
    });
  }, [])


  if (isInfluencer) {
    dashboard = <MenuInfluencer />
  } else {
    dashboard = <MenuCustomer />
  }

  console.log(upcomingMeetings)

  return (
    <div>
      {dashboard}

      <div className="meet-heading">
        Upcoming Meetings
      </div>

      <div className="meet-links">
        <a className="meet-link" href='/dashboard/meetings'>Upcoming</a>
        <a className="meet-link" href='/dashboard/past-meetings'>Past</a>
      </div>

      <div className="ind-meet-content">

        <div className="ind-meet-title">
          Title
        </div>

        <div className="ind-meet-type">
          Type
        </div>

        <div className="ind-meet-date">
          Date
        </div>

        <div className="ind-meet-start-time">
          Start at
        </div>

        <div className="ind-meet-end-time">
          End at
        </div>

        <div className="ind-meet-join">
          Join
        </div>

      </div>

      <div className="ind-meeting-content-upcoming">
        <ul >
          {Object.entries(upcomingMeetings).map( ([key, value]) => {
            return (
              <IndividualMeetingUpcoming key={key} type={value.tb_type} date={value.date} startTime={value.startTime} endTime={value.endTime} title={value.title}/>
            )
          })}
        </ul>
        {Object.keys(upcomingMeetings).length === 0 && <div className="no-upcoming-meetings">No Upcoming Meetings!</div>}
      </div>

    </div>
  );

}
