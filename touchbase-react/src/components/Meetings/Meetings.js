import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom"
import DashboardMenu from '../Dashboard/DashboardMenu.js'
import DashboardMenuCustomer from '../Dashboard/DashboardMenuCustomer.js'
import oooicon from '../../images/TouchbaseIcons/one-on-one-icon.png'
import groupicon from '../../images/TouchbaseIcons/group-icon.png'
import './Meetings.css'

export const Meetings = () => {

  const history = useHistory();
  const [isInfluencer, setInfluencer] = useState(false);
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
    } else if (res[0] === 201) {
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

  if (isInfluencer) {
    dashboard = <DashboardMenu />
  } else {
    dashboard = <DashboardMenuCustomer />
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


            <div className="individual-meeting">
              <div className="touchbase-type">
                <div className="touchbase-type-name">
                  Group
                </div>
                <div className="touchbase-type-icon">
                  <img src={groupicon} className="touchbase-icon" ></img>
                </div>
              </div>

              <div className="touchbase-info">
                <div className="touchbase-date">
                  Friday, April 16th
                </div>
                <div className="touchbase-time">
                  3:35-4:00 PM (EST)
                </div>
                <div className="touchbase-name">
                  Touchbase Tech Team Meeting
                </div>
                <div className="touchbase-join-button">
                  <button className="join-button" type="button">Join</button>
                </div>
              </div>
            </div>
          </div>



          <div className="spacer">
            <br/>
          </div>
          <div className="past-meetings">

            <div className="past-meetings-header">
              Past Meetings
            </div>

            <div className="individual-meeting">
              <div className="touchbase-type">
                <div className="touchbase-type-name">
                  1:1
                </div>
                <div className="touchbase-type-icon">
                  <img src={oooicon} className="touchbase-icon" ></img>
                </div>
              </div>

              <div className="touchbase-info">
                <div className="touchbase-date">
                  Monday, April 12th
                </div>
                <div className="touchbase-time">
                  5:30-4:25 PM (EST)
                </div>
                <div className="touchbase-name">
                  How to Code React
                </div>
                <div className="touchbase-join-button">
                  <button className="join-button" type="button">Join</button>
                </div>
              </div>
            </div>

          </div>
        </div>


      </div>


    </div>


  );

}
