import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom"
import { MenuInfluencer } from '../Menu/MenuInfluencer.js'
import { MenuCustomer } from '../Menu/MenuCustomer.js'
import oooicon from '../../images/TouchbaseIcons/one-on-one-icon.png'
import groupicon from '../../images/TouchbaseIcons/group-icon.png'
import IndividualMeeting from './IndividualMeeting.js'
import './Meetings.css'

export const Meetings = () => {

  const history = useHistory();
  const [isInfluencer, setInfluencer] = useState(false);
  const [upcomingMeetings, setUpcomingMeetings] = useState({});
  const [pastMeetings, setPastMeetings] = useState({});
  let dashboard;

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
      setPastMeetings(res[1].past_iterations)
      //setMeetings(res[1].iterations)
    })
    .catch(error => {
      console.error(error);
      return {name: "network error", description:""};
    });
  }, [])

  console.log(upcomingMeetings)
  console.log(pastMeetings)
  /*const size = Object.keys(allMeetings).length;
  console.log(size)

  for (var i = 1; i <= size; i++) {
    console.log(allMeetings[i])
  }*/


  if (isInfluencer) {
    dashboard = <MenuInfluencer />
  } else {
    dashboard = <MenuCustomer />
  }

  return (
    <div className="meetings-main-content">

      {dashboard}

      <div className="your-meetings-content">
        <div className="meetings-main-title">
          Your Meetings
        </div>

        <div className="past-and-upcoming-meetings">
          <div className="upcoming-meetings-panel">
            <div className="upcoming-meetings-header">
              Upcoming Meetings
            </div>

            <ul >
              {Object.entries(upcomingMeetings).map( ([key, value]) => {
                return (
                  <IndividualMeeting key={key} type="Group" icon={groupicon} date={value.date} startTime={value.startTime} endTime={value.endTime} title={value.title} button={true}/>
                )
              })}
            </ul>

            {/*<IndividualMeeting type="Group" icon={groupicon} date="Friday, April 16th" time="3:35-4:00 PM (EST)" title="Touchbase Tech Team Meeting"/>

            <IndividualMeeting type="Group" icon={groupicon} date="Friday, April 16th" time="3:35-4:00 PM (EST)" title="Touchbase Tech Team Meeting"/>*/}

          </div>



          <div className="spacer">
            <br/>
          </div>
          <div className="past-meetings">

            <div className="past-meetings-header">
              Past Meetings
            </div>

            <ul >
              {Object.entries(pastMeetings).map( ([key, value]) => {
                return (
                  <IndividualMeeting key={key} type="Group" icon={oooicon} date={value.date} startTime={value.startTime} endTime={value.endTime} title={value.title} button={false}/>
                )
              })}
            </ul>

          </div>
        </div>


      </div>


    </div>


  );

}
