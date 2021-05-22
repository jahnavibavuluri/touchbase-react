import React, { Component, useEffect, useState, Dropdown } from 'react';
import { useHistory, useLocation } from "react-router-dom"
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';
import './Popup1on1.css'
import moment from 'moment'
import { useAlert } from 'react-alert'

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

    console.log(moment(startDateValue).format('YYYY-MM-DD'));


    const addTouchbase = (event) => {
      event.preventDefault();
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

        } else {
          history.push('error')
        }
      })

    }

    return (
      <div className="popup-box">
        <div className="box">
          <span className="close-icon" onClick={props.handleClose}>x</span>
          <h1>New 1:1 Touchbase</h1>
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
            <p>Cost</p>
            <input className="cost-input" onChange={handleCost}/>
          </div>
          <div className="form-buttoms">
            <button className="cancel-button" onClick={props.handleClose}>Cancel</button>
            <button className="save-button" onClick={addTouchbase} >Save</button>
          </div>
        </div>
      </div>
    );
}
export default Popup1on1;
