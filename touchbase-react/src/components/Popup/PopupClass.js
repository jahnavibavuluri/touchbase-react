import React, { Component, useEffect, useState } from 'react';
import { useHistory, useLocation } from "react-router-dom"
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';
import './PopupClass.css'
import moment from 'moment'
import checkIcon from '../../images/ToastIcons/check.svg';
import errorIcon from '../../images/ToastIcons/error.svg';
import infoIcon from '../../images/ToastIcons/info.svg';
import warningIcon from '../../images/ToastIcons/warning.svg';
import Toast from '../Toast/Toast.js'
import 'react-calendar/dist/Calendar.css'
import { differenceInCalendarDays } from 'date-fns';

export const PopupClass = props => {
  const history = useHistory();
  const [startDateValue, onStartDateChange] = useState(new Date());
  const [endDateValue, onEndDateChange] = useState(new Date());
  const [startTimeValue, onStartTimeChange] = useState('00:00');
  const [endTimeValue, onEndTimeChange] = useState('00:00');
  const [cost, setCost] = useState(0);
  const [title, setTouchbaseTitle] = useState("");
  const [description, setTouchbaseDescription] = useState("");
  const [participants, setParticipants] = useState(0);
  const [repeat, setRepetitions] = useState(0);
  const [toastList, setToastList] = useState([]);
  const [input, setInput] = useState(false);
  const [type, setType] = useState("");

  const handleCost = (event) => {
    setCost(event.target.value);
  }

  const handleTouchbaseTitle = (event) => {
    setTouchbaseTitle(event.target.value);
  }

  const handleTouchbaseDescription = (event) => {
    setTouchbaseDescription(event.target.value);
  }

  const handleRepetitions = (event) => {
    setRepetitions(event.target.value);
  }

  const handleParticipants = (event) => {
    setParticipants(event.target.value);
  }

  const showToast = type => {
    const id = Math.floor((Math.random() * 101) + 1);

    switch(type) {
      case 'success':
        setToastList([
          {
            id,
            title: 'Success',
            description: 'This is a success toast component',
            backgroundColor: '#5cb85c',
            icon: checkIcon
          }
        ])
        break;
        default:
          setToastList([]);
      }
  }

/*const handleSuccessToastList = () => {
    setToastList([
      {
        id: 1,
        title: 'Success',
        description: 'New Touchbase has been added!',
        backgroundColor: '#5cb85c',
        icon: checkIcon
      },
    ])
  }

  const handleErrorToastList = () => {
    setToastList([
      {
        id: 1,
        title: 'Error',
        description: 'Please make sure your inputs are valid and try again.',
        backgroundColor: '#d9534f',
        icon: errorIcon
      },
    ])
  }*/

  //checks if the string input is not empty -- returns true if the string is empty
  const checkString = (props) => {
    if (!props || props.length === 0 || !props.trim()) {
      console.log("checkstring")
      return true;
    }
  }

  //checks if the cost input is a valid price. checks that the input is in xx.xx format returns true if not valid
  const checkCost = (props) => {
    if (isNaN(props) || props.toString().indexOf('.') != (props.length-3)) {
      console.log("checkcost")
      return true;
    }
  }

  //checking that the start date is not after the end date
  const isValidDate = a => b => {
    console.log("isvalidate")
    return differenceInCalendarDays(a, b);
  }

  const checkInput = () => {
    if (checkString(title) || checkString(description) || checkCost(cost) || isValidDate(startDateValue, endDateValue) < 0 || endTimeValue < startTimeValue) {
      setInput(false)
    } else {
      setInput(true)
    }
  }

  const getToastType = (event) => {
    //event.preventDefault();
    //checkInput();
    if (checkString(title) || checkString(description) || checkCost(cost) || isValidDate(startDateValue, endDateValue) < 0 || endTimeValue < startTimeValue) {
      console.log("input is wrong")
      history.push("/error")
    }
    else {
        fetch('/api/profile/addTouchbase/class', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin" : "*",
            "Access-Control-Allow-Credentials" : true
          },
          body: JSON.stringify({
            title:title,
            description:description,
            repeat:repeat,
            startOn: moment(startDateValue).format('YYYY-MM-DD'),
            endOn: moment(endDateValue).format('YYYY-MM-DD'),
            startTime: startTimeValue,
            endTime: endTimeValue,
            maxParticipants: participants,
            cost: cost
          })
        }).then(response => {
           const statusCode = response.status;
           return Promise.all([statusCode]);
        })
        .then((res) => {
          console.log(res);
          if (res[0] === 201) {
            setType("success")
            console.log("request went through!")
            console.log("showing toast")
            window.location.reload();
          } else {
            console.log("request did not go through")
            history.push("/error")
          }
        })
    }
  }


  /*const addTouchbase = (event) => {
    event.preventDefault();
    fetch('/profile/addTouchbase/class', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Credentials" : true
      },
      body: JSON.stringify({
        title:title,
        description:description,
        repeat:repeat,
        startOn: moment(startDateValue).format('YYYY-MM-DD'),
        endOn: moment(endDateValue).format('YYYY-MM-DD'),
        startTime: startTimeValue,
        endTime: endTimeValue,
        maxParticipants: participants,
        cost: cost
      })
    }).then(response => {
       const statusCode = response.status;
       return Promise.all([statusCode]);
    })
    .then((res) => {
      console.log(res);
      if (res[0] === 201) {

      } else {
        history.push('error')
      }
    })

  }*/

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        <h1>New Class Touchbase</h1>
        <div className="headings">
          <input className="touchbase-input" placeholder="Touchbase Title" onChange={handleTouchbaseTitle}/>
          <input className="touchbase-input" placeholder="Touchbase Description" onChange={handleTouchbaseDescription}/>
          </div>
        <div className="touchbase-date-and-time">
          <div className="date-picker">
            Start on:
            <br />
            <DatePicker
              onChange={onStartDateChange}
              value={startDateValue}
            />
          </div>
          <div className="date-picker">
            End on:
            <br />
            <DatePicker
              onChange={onEndDateChange}
              value={endDateValue}
            />
          </div>
          <div className="from-time-picker">
            From:
            <br />
            <TimePicker
              onChange={onStartTimeChange}
              value={startTimeValue}
            />
          </div>
          <div className="to-time-picker">
            To:
            < br/>
            <TimePicker
              onChange={onEndTimeChange}
              value={endTimeValue}
            />
          </div>
        </div>
        <div className="repeat-weeks">
          <p>Repeat every &lt;#&gt; of weeks </p>
          <select name="selectList" id="selectList" onChange={handleRepetitions}>
             <option value="0">0</option>
             <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div className="cost">
          <p>Max Participants</p>
          <input className="cost-input" onChange={handleParticipants}/>
        </div>
        <div className="cost">
          <p>Cost</p>
          <input className="cost-input" onChange={handleCost}/>
        </div>
        <div className="form-buttoms">
          <button className="cancel-button-class" onClick={props.handleClose}>Cancel</button>
          <button className="save-button-class" onClick={getToastType} >Save</button>
        </div>
      </div>
      <Toast
        toastList={toastList}
        position="bottom-right"
        autoDelete={true}
        dismissTime={3000}
      />
    </div>
  );
}
export default PopupClass;
