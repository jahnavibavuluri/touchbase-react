import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom"
import DashboardMenu from '../Dashboard/DashboardMenu.js'
import DashboardMenuCustomer from '../Dashboard/DashboardMenuCustomer.js'
import oooicon from '../../images/TouchbaseIcons/one-on-one-icon.png'
import groupicon from '../../images/TouchbaseIcons/group-icon.png'
import './Profile.css'
import EditEmailPopup from '../Popup/EditEmailPopup.js'
import EditPasswordPopup from '../Popup/EditPasswordPopup.js'

export const Profile = () => {

  const history = useHistory();
  const [isInfluencer, setInfluencer] = useState(false);
  const [isOpenEmail, setIsOpenEmail] = useState(false);
  const [isOpenPassword, setIsOpenPassword] = useState(false);

  let dashboard;
  let name = "John Smith";
  let bio = "Hi, I'm John and I'm a cook! I love making new foods and creating new recipes. My passion from cooking comes from my mother and my family. Join me in finding new flavors!"
  let cat = "Food, Cooking, Baking"
  let email = "john.smith@gmail.com"
  let phoneNumber = "732-397-6642"
  let address = "45 Sunflower Avenue, Somerset, New Jersey, 08873"

  const handleInfluencer = (event) => {
    setInfluencer(true);
  }

  const toggleEmail = () => {
    setIsOpenEmail(!isOpenEmail);
  }

  const togglePassword = () => {
    setIsOpenPassword(!isOpenPassword);
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
    } else if (res[0] === 202) {
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
    <div className="content">

      {dashboard}

      <div className="summary">
        <div className="name">
          {name}
        </div>
        <div className="bio">
          {bio}
        </div>
        <div className="categories">
          {cat}
        </div>
      </div>

      <div className="additional-info">
        <div className="email">
          {email}
        </div>

        <div className="phone-number">
          {phoneNumber}
        </div>

        <div className="address">
          {address}
        </div>
      </div>

      <div className="edit-buttons">
      <input
        className="edit-email"
        type="button"
        value="Edit Email"
        onClick={toggleEmail}
      />
      {isOpenEmail && <EditEmailPopup handleClose={toggleEmail}/>}

      <input
        className="edit-password"
        type="button"
        value="Edit Password"
        onClick={togglePassword}
      />
      {isOpenPassword && <EditPasswordPopup handleClose={togglePassword}/>}
      </div>


    </div>
  );
}

/*
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
*/
