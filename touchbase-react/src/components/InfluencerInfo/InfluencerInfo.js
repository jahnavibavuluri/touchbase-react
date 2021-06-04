import React, { useState, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import './InfluencerInfo.css'
import logo from '../../images/TouchbaseIcons/touchbase_logo.png'
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch'
import Navbar from '../NavBar/Navbar.js'
import Footer from '../Footer/Footer.js'
import Button from './Button.js'

export const InfluencerInfo = () => {
  const [categories, setCategories] = useState([]);

  const handleCategory = (event) => {
    if (isInArray(event.target.value)) {
      const index = categories.indexOf(event.target.value);
      if (index > -1) {
        categories.splice(index, 1);
      }
    } else {
      categories.push(event.target.value)
    }
    return categories
  }

  const isInArray = (props) => {
    for (var i = 0; i<categories.length; i++) {
      if (categories[i] === props) {
        return true;
      }
    }
    return false;
  }


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
            <label className="influencer-info-label" for="venmo">Vemno Handle (This is how you will be paid!)</label>
            <br />
            <input className="influencer-info-input" type="text" id="venmo" name="venmo" />
            <br />
            <label className="influencer-info-label" for="password">Categories -- Please enter your categories with a comma in between</label>
            <br />
            <input className="influencer-info-input" type="text" id="venmo" name="venmo" />
            <br />
            {/*<div className="select-categories">
              <button value="Food" onClick={handleCategory}>Food</button>
              <button value="Fashion" onClick={handleCategory}>Fashion</button>
              <button value="Gaming" onClick={handleCategory}>Gaming</button>
              <button value="Home Decor" onClick={handleCategory}>Home Decor</button>
              <button value="Entertainment" onClick={handleCategory}>Entertainment</button>
              <button value="Makeup" onClick={handleCategory}>Makeup</button>
              <button value="Fitness" onClick={handleCategory}>Fitness</button>
              <button value="Beauty" onClick={handleCategory}>Beauty</button>
              <button value="Technology" onClick={handleCategory}>Technology</button>
              <button value="Photography" onClick={handleCategory}>Photography</button>
              <button value="Design" onClick={handleCategory}>Design</button>
              <button value="Art" onClick={handleCategory}>Art</button>
              <button value="Dance" onClick={handleCategory}>Dance</button>
            </div>*/}
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
