import React, { useState } from 'react';
import Popup from '../Popup/Popup';
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';
import './About.css';

export const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dateValue, onDateChange] = useState(new Date());
  const [timeValue, onTimeChange] = useState('10:00');
  const [participants, setParticipants] = useState(0);
  const [cost, setCost] = useState(0);


  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const handleParticipants = (event) => {
    setParticipants(event.target.value);
  }

  const handleCost = (event) => {
    setCost(event.target.value);
  }

  return (
    <div>
      <input
        type="button"
        value="Click to Open Popup"
        onClick={togglePopup}
      />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      {isOpen && <Popup
        content={<>
          <div className="headings">
            <h1>Jello</h1>
            <p>In this Group Touchbase, the backend developer, Sneh Patel, and the frontend developer, Jahnavi Bavuluri, discuss their updates on Touchbase's MVP with the project lead, Sue Kang. We aim to have the MVP released by early June and plan on having consistent updates to attract more users to our site.</p>
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
        </>}
        handleClose={togglePopup}
      />}
  </div>
  );
}
