import React, { useEffect, useState } from "react";
import './MeetingsPast.css'
import favicon from '../../images/TouchbaseIcons/favicon-black.png'
import { MenuInfluencer } from '../Menu/MenuInfluencer.js'
import { MenuCustomer } from '../Menu/MenuCustomer.js'
import IndividualMeetingsPast from './IndividualMeetingsPast'

export const MeetingsPast = props => {

  let dashboard;
  const [isInfluencer, setInfluencer] = useState(false);
  const [pastMeetings, setPastMeetings] = useState({});

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
      //setUpcomingMeetings(res[1].future_iterations)
      setPastMeetings(res[1].past_iterations)
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

  console.log(pastMeetings)

  return (
    <div>
      {dashboard}

      <div className="meet-heading-past">
        Past Meetings
      </div>

      <div className="meet-links-past">
        <a className="meet-link-past" href='/dashboard/meetings'>Upcoming</a>
        <a className="meet-link-past" href='/dashboard/past-meetings'>Past</a>
      </div>

      <div className="ind-meet-content-past">

        <div className="ind-meet-title-past">
          Title
        </div>

        <div className="ind-meet-type-past">
          Type
        </div>

        <div className="ind-meet-date-past">
          Date
        </div>

        <div className="ind-meet-start-time-past">
          Start at
        </div>

        <div className="ind-meet-end-time-past">
          End at
        </div>

      </div>

      <div className="ind-meeting-content-past">
        <ul >
          {Object.entries(pastMeetings).map( ([key, value]) => {
            return (
              <IndividualMeetingsPast key={key} type={value.tb_type} date={value.date} startTime={value.startTime} endTime={value.endTime} title={value.title}/>
            )
          })}
        </ul>
        {Object.keys(pastMeetings).length === 0 && <div className="no-past-meetings">No Past Meetings!</div>}
      </div>

    </div>
  );

}
