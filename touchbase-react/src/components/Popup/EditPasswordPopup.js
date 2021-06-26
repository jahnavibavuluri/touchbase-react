import React, { Component, useEffect, useState, Dropdown } from 'react';
import { useHistory, useLocation } from "react-router-dom"
import './EditPasswordPopup.css'
import moment from 'moment'
import { useAlert } from 'react-alert'

export const EditPasswordPopup = props => {
    const history = useHistory();
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const handleOldPassword = (event) => {
      setOldPassword(event.target.value);
    }

    const handleNewPassword = (event) => {
      setNewPassword(event.target.value);
    }


    const changePassword = (event) => {
      event.preventDefault();
      fetch('/api/profile/edit/password', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin" : "*",
          "Access-Control-Allow-Credentials" : true
        },
        body: JSON.stringify({
          password:oldPassword,
          newPassword:newPassword
        })
      }).then(response => {
         const statusCode = response.status;
         return Promise.all([statusCode]);
      })
      .then((res) => {
        console.log(res);
        if (res[0] === 202 || res[0] === 200) {

        } else {
          history.push('error')
        }
      })

    }

    return (
      <div className="popup-box-password">
        <div className="box-password">
          <span className="close-icon-password" onClick={props.handleClose}>x</span>
          <h1>Change Password</h1>
          <div className="headings-password">
            <input className="password-input" placeholder="Old Password" onChange={handleOldPassword}/>
            <input className="password-input" placeholder="New Password" onChange={handleNewPassword}/>
          </div>
          <div className="form-buttoms-password">
            <button className="cancel-button-password" onClick={props.handleClose}>Cancel</button>
            <button className="save-button-password" onClick={changePassword} >Save</button>
          </div>
        </div>
      </div>
    );
}
export default EditPasswordPopup;
