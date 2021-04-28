import React from 'react'
import DashboardMenu from '../Dashboard/DashboardMenu.js'
import oooicon from '../../images/TouchbaseIcons/one-on-one-icon.png'
import groupicon from '../../images/TouchbaseIcons/group-icon.png'
import './Profile.css'

export const Profile = () => {
  return (
    <div className="profile-main-content">

      <DashboardMenu/>

      <div className="profile-main-panel">
        <div className="profile-header-main">
          Your Profile
        </div>

        <div className="username">
          User Name
        </div>

        <div className="user-information">
          <div className="user-information-row">
            <div className="row-left">
              Email
            </div>
            <div className="row-center">
              user email
            </div>
            <div className="edit-button-div">
              <button className="profile-button" type="button">Edit</button>
            </div>
          </div>

          <div className="user-information-row">
            <div className="row-left">
              Phone Number
            </div>
            <div className="row-center">
              user phone number
            </div>
            <div className="edit-button-div">
              <button className="profile-button" type="button">Edit</button>
            </div>
          </div>

          <div className="user-information-row">
            <div className="row-left">
              Address
            </div>
            <div className="row-center">
              user address
            </div>
            <div className="edit-button-div">
              <button className="profile-button" type="button">Edit</button>
            </div>
          </div>

        </div>

        <div className="change-password-div">
          <button className="password-button" type="button">Change Password</button>
        </div>

      </div>

    </div>
  );
}
