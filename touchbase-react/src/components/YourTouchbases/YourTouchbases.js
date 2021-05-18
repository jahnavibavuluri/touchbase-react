import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom"
import DashboardMenu from '../Dashboard/DashboardMenu.js'
import DashboardMenuCustomer from '../Dashboard/DashboardMenuCustomer.js'
import oooicon from '../../images/TouchbaseIcons/one-on-one-icon.png'
import groupicon from '../../images/TouchbaseIcons/group-icon.png'
import grouphangouticon from '../../images/TouchbaseIcons/group-hangout-icon.png'
import './YourTouchbases.css'

export const YourTouchbases = () => {

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
    <div className="yourtouchbases-main">
      {dashboard}

      <div className="all-touchbases-content">

        <div className="main-title">
          Your Touchbases
        </div>


        <div className="touchbases-main">
          <div className="touchbases-header">
            <div className="touchbases-header-image">
              <img src={oooicon} className="touchbases-icon" ></img>
            </div>
            <div className="touchbases-header-text">
              Your 1:1 Touchbases
            </div>
          </div>

          <div className="individual-touchbases">
            {/*will implement later. this will be dynamic depending on how many one on one touchbases the influecer has created --
            //this will take some time to learn and implement. For now, act like all different ones are going to live in this div*/}
            You have no 1:1 Touchbases! Add one and have the chance to have one on one sessions with your fans.
          </div>

          <div className="touchbases-add-button">
            <button className="add-touchbases" type="button">Add new 1:1 Touchbase</button>
          </div>
        </div>
        <br/>
        <br/>
        <div className="touchbases-main">
          <div className="touchbases-header">
            <div className="touchbases-header-image">
              <img src={groupicon} className="touchbases-icon" ></img>
            </div>
            <div className="touchbases-header-text">
              Your Group Touchbases
            </div>
          </div>

          <div className="individual-touchbases">
            {/*will implement later. this will be dynamic depending on how many one on one touchbases the influecer has created --
            //this will take some time to learn and implement. For now, act like all different ones are going to live in this div*/}
            You have no Group Touchbases! Add one and focus on a specific project of discussion with your fans.
          </div>

          <div className="touchbases-add-button">
            <button className="add-touchbases" type="button">Add new Group Touchbase</button>
          </div>
        </div>

        <br/>
        <br/>

        <div className="touchbases-main">
          <div className="touchbases-header">
            <div className="touchbases-header-image">
              <img src={grouphangouticon} className="touchbases-icon" ></img>
            </div>
            <div className="touchbases-header-text">
              Your Group Hangout Touchbases
            </div>
          </div>

          <div className="individual-touchbases">
            {/*will implement later. this will be dynamic depending on how many one on one touchbases the influecer has created --
            //this will take some time to learn and implement. For now, act like all different ones are going to live in this div*/}
            You have no Group Hangout Touchbases! Add one and have the chance to engage and have fun with your fans.
          </div>

          <div className="touchbases-add-button">
            <button className="add-touchbases" type="button">Add new Group Hangout Touchbase</button>
          </div>
        </div>

        <br/>
        <br/>


      </div>
    </div>
  );
}
