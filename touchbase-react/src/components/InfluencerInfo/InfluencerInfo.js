import React, { useState, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import './InfluencerInfo.css'
import logo from '../../images/TouchbaseIcons/touchbase_logo.png'
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch'
import Navbar from '../NavBar/Navbar.js'
import Footer from '../Footer/Footer.js'

export const InfluencerInfo = () => {


  return (
    <div className="influencer-info-page-div">
      <Navbar />
      <div className="influencer-info-page-responsive">
        <div className="influencer-info-logo">
          <img src={logo} width="200" height="60"></img>
        </div>
        <div className="influencer-info-header">
          Before we get started, we would like to get to know you better.
        </div>
        <div className="influencer-info-form">
          {/*<form onSubmit={handleRegistration}>*/}
            <label className="influencer-info-label" for="firstName">Bio</label>
            <br />
            <textarea className="influencer-info-bio" name="influencer-bio" cols="40" rows="5"></textarea>
            <br />
            <label className="influencer-info-label" for="lastName">Twitter Handle</label>
            <br />
            <input className="influencer-info-input" type="text" id="lastName" name="lastName" />
            <br />
            <label className="influencer-info-label" for="email">Instagram Handle</label>
            <br />
            <input className="influencer-info-input" type="text" id="email" name="email" />
            <br />
            <label className="sinfluencer-info-label" for="password">Categories</label>
            <br />
            <input className="influencer-info-input" type="password" id="password" name="password" />
            <br />
            <div className="select-categories">
              <button>Food</button>
              <button>Fashion</button>
              <button>Gaming</button>
              <button>Home Decor</button>
              <button>Entertainment</button>
              <button>Makeup</button>
              <button>Fitness</button>
              <button>Beauty</button>
              <button>Technology</button>
              <button>Photography</button>
              <button>Design</button>
              <button>Art</button>
              <button>Dance</button>
            </div>
            <div className="influencer-info-submit-div">
            <button className="influencer-info-button-submit">
              Agree & Join
            </button>
            </div>
          {/*</form>*/}
        </div>
      </div>

    </div>
  );
}
