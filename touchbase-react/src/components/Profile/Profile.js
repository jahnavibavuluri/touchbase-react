import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom"
import DashboardMenu from '../Dashboard/DashboardMenu.js'
import DashboardMenuCustomer from '../Dashboard/DashboardMenuCustomer.js'
import oooicon from '../../images/TouchbaseIcons/one-on-one-icon.png'
import groupicon from '../../images/TouchbaseIcons/group-icon.png'
import './Profile.css'

export const Profile = () => {

  const history = useHistory();
  const [isInfluencer, setInfluencer] = useState(false);
  let dashboard;

  const handleInfluencer = (event) => {
    setInfluencer(true);
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
    <div className="profile-main-content">

      {dashboard}

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
