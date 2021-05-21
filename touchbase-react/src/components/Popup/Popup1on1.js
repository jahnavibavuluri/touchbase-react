import React, { Component, useEffect, useState } from 'react';
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';
import './Popup1on1.css'

export const Popup1on1 = props => {
    const [dateValue, onDateChange] = useState(new Date());
    const [timeValue, onTimeChange] = useState('10:00');
    const [participants, setParticipants] = useState(0);
    const [cost, setCost] = useState(0);
    const [title, setTouchbaseTitle] = useState("");
    const [description, setTouchbaseDescription] = useState("");
    const [repeat, setRepetitions] = useState(1);

    const handleParticipants = (event) => {
      setParticipants(event.target.value);
    }

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
                onChange={onDateChange}
                value={dateValue}
              />
            </div>
            <div className="date-picker">
              End on:
              <br />
              <DatePicker
                onChange={onDateChange}
                value={dateValue}
              />
            </div>
            <div className="from-time-picker">
              From:
              <br />
              <TimePicker
                onChange={onTimeChange}
                value={timeValue}
              />
            </div>
            <div className="to-time-picker">
              To:
              < br/>
              <TimePicker
                onChange={onTimeChange}
                value={timeValue}
              />
            </div>
          </div>
          <div className="repeat-weeks">
            <p>Repeat how many times a week</p>
            <input className="repeat-weeks-input" onChange={handleRepetitions}/>
          </div>
          <div className="max-participants">
            <p>Max Participants</p>
            <input className="participants-input" onChange={handleParticipants}/>
          </div>
          <div className="cost">
            <p>Cost</p>
            <input className="cost-input" onChange={handleCost}/>
          </div>
          <div className="form-buttoms">
            <button className="cancel-button">Cancel</button>
            <button className="save-button">Save</button>
          </div>
        </div>
      </div>
    );
}
export default Popup1on1;
