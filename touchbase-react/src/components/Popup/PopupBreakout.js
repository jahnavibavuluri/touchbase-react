import React, { Component, useEffect, useState } from 'react';
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';
import './PopupBreakout.css'

export const PopupBreakout = props => {
    const [dateValue, onDateChange] = useState(new Date());
    const [timeValue, onTimeChange] = useState('10:00');
    const [participants, setParticipants] = useState(0);
    const [cost, setCost] = useState(0);
    const [title, setTouchbaseTitle] = useState("");
    const [description, setTouchbaseDescription] = useState("");

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

    return (
      <div className="popup-box">
        <div className="box">
          <span className="close-icon" onClick={props.handleClose}>x</span>
          <h1>New Breakout Touchbase</h1>
          <div className="headings">
            <input className="touchbase-input" placeholder="Touchbase Title" onChange={handleTouchbaseTitle}/>
            <input className="touchbase-input" placeholder="Touchbase description" onChange={handleTouchbaseDescription}/>
          </div>
          <div className="touchbase-date-and-time">
            <div className="date-picker">
              When:
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
export default PopupBreakout;
