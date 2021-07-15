import React, { Component, useEffect, useState, Dropdown } from 'react';
import { useHistory, useLocation } from "react-router-dom"
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';
import './Popup1on1.css'
import moment from 'moment'
import { useAlert } from 'react-alert'
import checkIcon from '../../images/ToastIcons/check.svg';
import errorIcon from '../../images/ToastIcons/error.svg';
import infoIcon from '../../images/ToastIcons/info.svg';
import warningIcon from '../../images/ToastIcons/warning.svg';
import Toast from '../Toast/Toast.js'
import 'react-calendar/dist/Calendar.css'
import { differenceInCalendarDays } from 'date-fns';

export const Popup1on1 = props => {
    const history = useHistory();
    const [startDateValue, onStartDateChange] = useState(new Date());
    const [endDateValue, onEndDateChange] = useState(new Date());
    const [startTimeValue, onStartTimeChange] = useState('00:00');
    const [endTimeValue, onEndTimeChange] = useState('00:00');
    const [cost, setCost] = useState(0);
    const [title, setTouchbaseTitle] = useState("");
    const [description, setTouchbaseDescription] = useState("");
    const [repeat, setRepetitions] = useState(0);
    const [toastList, setToastList] = useState([]);
    const [input, setInput] = useState(false);
    const [type, setType] = useState("");
    const [duration, setDuration] = useState(false)

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

    const showToast = type => {
      const id = Math.floor((Math.random() * 101) + 1);

      switch(type) {
        case 'success':
          setToastList([
            {
              id,
              title: 'Success',
              description: 'New Touchbase added!',
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
        return true;
      }
    }

    //checks if the cost input is a valid price. checks that the input is in xx.xx format returns true if not valid
    const checkCost = (props) => {
      if (isNaN(props) || props.toString().indexOf('.') != (props.length-3)) {
        return true;
      }
    }

    //checking that the start date is not after the end date
    const isValidDate = a => b => {
      return differenceInCalendarDays(a, b);
    }

    const checkInput = () => {
      if (checkString(title) || checkString(description) || checkCost(cost) || isValidDate(startDateValue, endDateValue) < 0 || endTimeValue < startTimeValue) {
        setInput(false)
      } else {
        setInput(true)
      }
    }

    const checkDuration = a => b => {
      let d = a - b
      if (d != 15 || d != 25 || d != 55) {
        setDuration(true)
      }
    }

    const getToastType = (event) => {
      //event.preventDefault();
      //checkInput();
      if (checkString(title) || checkString(description) || checkCost(cost) || isValidDate(startDateValue, endDateValue) < 0 || endTimeValue < startTimeValue) {
        console.log("input is wrong")
        console.log(duration)
        console.log(endTimeValue - startTimeValue)
        history.push("/error")
      } else {
          fetch('/api/profile/addTouchbase/oneOnone', {
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
      checkInput();

      if (!input) {
        console.log("request did not go through")
        handleErrorToastList(event.type);
      } else {
        fetch('/profile/addTouchbase/oneOnone', {
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
            cost: cost
          })
        }).then(response => {
           const statusCode = response.status;
           return Promise.all([statusCode]);
        })
        .then((res) => {
          console.log(res);
          if (res[0] === 201) {
            console.log("request went through!")
            handleSuccessToastList()
            console.log(toastList)
          } else {
            history.push('error')
          }
        })
      }

    }*/

    return (
      <div className="popup-box-oneonone">
        <div className="box-oneonone">
          <span className="close-icon-oneonone" onClick={props.handleClose}>x</span>
          <h1>New 1:1 Touchbase</h1>
          <div className="headings">
            <input className="touchbase-input-oneonone" placeholder="Touchbase Title" onChange={handleTouchbaseTitle}/>
            <input className="touchbase-input-oneonone" placeholder="Touchbase Description" onChange={handleTouchbaseDescription}/>
            </div>
          <div className="touchbase-date-and-time-oneonone">
            <div className="date-picker-oneonone">
              Start on:
              <br />
              <DatePicker
                onChange={onStartDateChange}
                value={startDateValue}
              />
            </div>
            <div className="date-picker-oneonone">
              End on:
              <br />
              <DatePicker
                onChange={onEndDateChange}
                value={endDateValue}
              />
            </div>
            <div className="from-time-picker-oneonone">
              From:
              <br />
              <TimePicker
                onChange={onStartTimeChange}
                value={startTimeValue}
              />
            </div>
            <div className="to-time-picker-oneonone">
              To:
              < br/>
              <TimePicker
                onChange={onEndTimeChange}
                value={endTimeValue}
              />
            </div>
          </div>
          <div className="repeat-weeks-oneonone">
            <p>Repeat every &lt;#&gt; of weeks </p>
            <select name="selectList" id="selectList" onChange={handleRepetitions}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="cost-oneonone">
            <p>Cost</p>
            <input className="cost-input-oneonone" onChange={handleCost}/>
          </div>
          <div className="form-buttoms-oneonone">
            <button className="cancel-button-oneonone" onClick={props.handleClose}>Cancel</button>
            <button className="save-button-oneonone" onClick={getToastType} >Save</button>
          </div>
        </div>
        <div className="toast">
          <Toast
            toastList={toastList}
            position="bottom-right"
            autoDelete={true}
            dismissTime={3000}
          />
        </div>
      </div>
    );
}
export default Popup1on1;
