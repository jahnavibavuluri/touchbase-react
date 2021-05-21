import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom"
import DashboardMenu from '../Dashboard/DashboardMenu.js'
import DashboardMenuCustomer from '../Dashboard/DashboardMenuCustomer.js'
import oooicon from '../../images/TouchbaseIcons/one-on-one-icon.png'
import groupicon from '../../images/TouchbaseIcons/group-icon.png'
import grouphangouticon from '../../images/TouchbaseIcons/group-hangout-icon.png'
import './YourTouchbases.css'
import Popup from '../Popup/Popup';
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';
import Popup1on1 from '../Popup/Popup1on1.js'
import PopupClass from '../Popup/PopupClass.js'
import PopupBreakout from '../Popup/PopupBreakout.js'

export const YourTouchbases = () => {

  const history = useHistory();
  const [isInfluencer, setInfluencer] = useState(false);
  const [isOpen1on1, setIsOpen1on1] = useState(false);
  const [isOpenClass, setIsOpenClass] = useState(false);
  const [isOpenBreakout, setIsOpenBreakout] = useState(false);
  const [dateValue, onDateChange] = useState(new Date());
  const [timeValue, onTimeChange] = useState('10:00');
  const [participants, setParticipants] = useState(0);
  const [cost, setCost] = useState(0);
  const [title, setTouchbaseTitle] = useState("");
  const [description, setTouchbaseDescription] = useState("");
  let dashboard;

  const togglePopup1on1 = () => {
    setIsOpen1on1(!isOpen1on1);
  }

  const togglePopupClass = () => {
    setIsOpenClass(!isOpenClass);
  }

  const togglePopupBreakout = () => {
    setIsOpenBreakout(!isOpenBreakout);
  }

  const handleParticipants = (event) => {
    setParticipants(event.target.value);
  }

  const handleCost = (event) => {
    setCost(event.target.value);
  }

  const handleInfluencer = (event) => {
    setInfluencer(true);
  }

  const handleTouchbaseTitle = (event) => {
    setTouchbaseTitle(event.target.value);
  }

  const handleTouchbaseDescription = (event) => {
    setTouchbaseDescription(event.target.value);
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
    } else if (res[0] === 204) {
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
              <input
                className="add-touchbases"
                type="button"
                value="Add New 1:1 Touchbase"
                onClick={togglePopup1on1}
              />
              {isOpen1on1 && <Popup1on1 handleClose={togglePopup1on1}/>}
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
            <input
              className="add-touchbases"
              type="button"
              value="Add New Group Touchbase"
              onClick={togglePopupClass}
            />
            {isOpenClass && <PopupClass handleClose={togglePopupClass}/>}
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
            <input
              className="add-touchbases"
              type="button"
              value="Add New Hangout Touchbase"
              onClick={togglePopupBreakout}
            />
            {isOpenBreakout && <PopupBreakout handleClose={togglePopupBreakout}/>}
            </div>
        </div>

        <br/>
        <br/>


      </div>
    </div>
  );
}
