import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom"
import { MenuInfluencer } from '../Menu/MenuInfluencer.js'
import { MenuCustomer } from '../Menu/MenuCustomer.js'
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
import checkIcon from '../../images/ToastIcons/check.svg';
import errorIcon from '../../images/ToastIcons/error.svg';
import infoIcon from '../../images/ToastIcons/info.svg';
import warningIcon from '../../images/ToastIcons/warning.svg';
import Toast from '../Toast/Toast.js'
import MyTouchbase from './MyTouchbase.js'

export const YourTouchbases = () => {

  const history = useHistory();
  const [isInfluencer, setInfluencer] = useState(false);
  const [isOpen1on1, setIsOpen1on1] = useState(false);
  const [isOpenClass, setIsOpenClass] = useState(false);
  const [isOpenBreakout, setIsOpenBreakout] = useState(false);
  const [isOpenToast, setIsOpenToast] = useState(false);
  const [dateValue, onDateChange] = useState(new Date());
  const [timeValue, onTimeChange] = useState('10:00');
  const [participants, setParticipants] = useState(0);
  const [cost, setCost] = useState(0);
  const [title, setTouchbaseTitle] = useState("");
  const [description, setTouchbaseDescription] = useState("");
  const [toastList, setToastList] = useState([]);
  const [oneOnOnes, setOneOnOnes] = useState([]);
  const [classtb, setClass] = useState([]);
  const [breakouts, setBreakouts] = useState([]);
  const [nextIteration, setNextIteration] = useState({});
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

  const toggleToast = () => {
    setIsOpenToast(!isOpenToast);
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

  const handleToastList = (event) => {
    setToastList([
      {
        id: 1,
        title: 'Success',
        description: 'New Touchbase has been added!',
        backgroundColor: '#5cb85c',
        icon: checkIcon,
        handleClose: toggleToast
      },
    ])
  }

  /*const testList = [
    {
      id: 1,
      title: 'Success',
      description: 'New Touchbase has been added!',
      backgroundColor: '#5cb85c',
      icon: checkIcon
    },
  ];*/

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
    //console.log(res);
    //console.log(influencerDashboard);
  })
  .catch(error => {
    console.error(error);
    return { name: "network error", description: "" };
  });
  },[])

  useEffect(() => {
    fetch('/profile/myTouchbases')
    .then(response => {
      const statusCode = response.status;
      const data = response.json();
      return Promise.all([statusCode, data]);
    })
    .then((res, data) => {
      //console.log(res[1].oneOnones)
      setOneOnOnes(res[1].oneOnones)
      setClass(res[1].classes)
      setBreakouts(res[1].breakouts)
      //setClass(res[1].classes)
      //setBreakouts(res[1].breakouts)
    })
    .catch(error => {
      console.error(error);
      return {name: "network error", description:""};
    });
  }, [])

  //console.log(oneOnOnes)

  if (isInfluencer) {
    dashboard = <MenuInfluencer />
  } else {
    dashboard = <MenuCustomer />
  }
  return (

    <div className="youtouchbases-main">
      {dashboard}

      <div className="your-touchbases-content">

        <div className="your-touchbases-header">
          <div>Touchbases</div>
          <div className="sub"> Create more Touchbases to earn more and meet new clients.</div>
        </div>

        <div className="your-touchbases-grid-content">

          <div className="your-touchbases-one-on-one">
            <div className="one-on-one-heading">
              <div>1:1</div>
              <div>
                <input
                  className="add-touchbase-button"
                  type="button"
                  value="+"
                  onClick={togglePopup1on1}
                />
              </div>
            </div>
            <div className="ind-one-on-one">
              {oneOnOnes.map(function(name, index){
                //setNextIteration(name.nextIteration);
                console.log(nextIteration);
                return <MyTouchbase key={index} title={name.title} description={name.description} cost={name.cost}/>;
              })}
            </div>
          </div>

          <div className="your-touchbases-class">
            <div className="class-heading">
              <div>Class</div>
              <div>
                <input
                  className="add-touchbase-button"
                  type="button"
                  value="+"
                  onClick={togglePopupClass}
                />
              </div>
            </div>
            <div className="ind-class">
              {classtb.map(function(name, index){
                return <MyTouchbase key={index} title={name.title} description={name.description} cost={name.cost}/>;
              })}
            </div>
          </div>



          <div className="your-touchbases-breakout">
            <div className="breakout-heading">
              <div>Breakout</div>
              <div>
                <input
                  className="add-touchbase-button"
                  type="button"
                  value="+"
                  onClick={togglePopupBreakout}
                />
              </div>
            </div>
            <div className="ind-breakout">
              {breakouts.map(function(name, index){
                return <MyTouchbase key={index} title={name.title} description={name.description} cost={name.cost}/>;
              })}
            </div>
          </div>

        </div>


      </div>
      {isOpen1on1 && <Popup1on1 handleClose={togglePopup1on1}/>}
      {isOpenClass && <PopupClass handleClose={togglePopupClass}/>}
      {isOpenBreakout && <PopupBreakout handleClose={togglePopupBreakout}/>}
    </div>










  );
}

{/*
  <div className="your-touchbases-header">
    <div>Touchbases</div>
    <div className="sub"> Create more Touchbases to earn more and meet new clients.</div>
  </div>

  <div className="your-touchbases-grid">
    <div className="your-touchbases-oneonone">
      Your 1:1 Touchbases
      <div className="touchbase-type-info">
        1:1 Touchbases allow you to spend time with one client at a time.
      </div>

      <div className="after-header">
          {oneOnOnes.map(function(name, index){
            //setNextIteration(name.nextIteration);
            console.log(nextIteration);
            return <MyTouchbase key={index} title={name.title} description={name.description} cost={name.cost}/>;
          })}
      </div>
    </div>

    <div className="your-touchbases-class">
      Your Class Touchbases
      <div className="touchbase-type-info">
        Class Touchbases allow you to focus on a specific project with your clients.
      </div>

      <div className="after-header">
          {classtb.map(function(name, index){
            return <MyTouchbase key={index} title={name.title} description={name.description} cost={name.cost}/>;
          })}
      </div>
    </div>

    <div className="your-touchbases-breakout">
      Your Breakout Touchbases
      <div className="touchbase-type-info">
        Breakout Touchbases allow you to engage and have fun with your clients.
      </div>

      <div className="after-header">
          {breakouts.map(function(name, index){
            return <MyTouchbase key={index} title={name.title} description={name.description} cost={name.cost}/>;
          })}
      </div>
    </div>

  </div>

















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
        will implement later. this will be dynamic depending on how many one on one touchbases the influecer has created --
        //this will take some time to learn and implement. For now, act like all different ones are going to live in this div*
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
        will implement later. this will be dynamic depending on how many one on one touchbases the influecer has created --
        //this will take some time to learn and implement. For now, act like all different ones are going to live in this div
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
        will implement later. this will be dynamic depending on how many one on one touchbases the influecer has created --
        //this will take some time to learn and implement. For now, act like all different ones are going to live in this div
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
</div>*/}
