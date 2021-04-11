import React from 'react';
import { useHistory } from "react-router-dom";
import './LandingPage.css';

import number_one from '../../images/LandingPage/1.png'
import number_two from '../../images/LandingPage/2.png'
import number_three from '../../images/LandingPage/3.png'
import img1 from '../../images/LandingPage/touchbase_img_Q&A.png'
import img2 from '../../images/LandingPage/touchbase_img_touchbases.png'
import img3 from '../../images/LandingPage/touchbase_img_dms.png'
import logo from '../../images/TouchbaseIcons/touchbase_logo.png'
//import Navbar from '../NavBar/Navbar.js';

//import SignupPage from './SignupPage'

export const LandingPage = () => {
  const history = useHistory();

  const handleExplore = () => {
    history.push("/explore");
  };

  return (

    <div className="landingPage">
      <div className="nav">
        Meet with your favorite pros & influencers
        <div className='nav1'>
          Your questions. Their personalized advice, consulting, and insights. (And for a worthy cause.)
        </div>
          <div className="nav-button">
            <button className="sign-in-button" onClick={handleExplore} type="button">Explore</button>
          </div>
      </div>

      <div className="content-panel-one">
        <div className="content-panel-one-responsive">
          <div className="content-panel-one-image">
            <img src={img1} className="img1" ></img>
          </div>
          <div className="content-panel-one-text">
            <div className="why-touchbase">
              Why Touchbase?
            </div>
            <div className="why-touchbase-header">
              Access to top industry pros, influences, and creators
            </div>
            <div className="why-touchbase-answer">
              Get personalized help and advice - from people that you already know, trust,
              and follow. Whether it's personal or for business, our experts are excited to chat.
            </div>
          </div>
        </div>
      </div>

      <div className="content-panel-four">
        <div className="content-panel-four-responsive">
          <div className="how-it-works">
            How it works
          </div>
          <div className="block-content">
            <div className="block-one">
              <img src={number_one} className="number_one"></img>
              <div className="block-one-text">
                Search among our many experts and influencers and find the ones who fit your needs.
              </div>
            </div>
            <div className="block-two">
              <img src={number_two} className="number_two"></img>
              <div className="block-two-text">
                Our user friendly platform makes it effortless for you to book a touch base at your preferred date and time.
              </div>
            </div>
            <div className="block-three">
              <img src={number_three} className="number_three"></img>
              <div className="block-three-text">
                Join your touch base at the scheduled time via our reliable, safe, and fast platform and get the personalized advice you need!
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="content-panel-two">
        <div className="content-panel-two-responsive">
          <div className="content-panel-two-image">
            <img src={img2} className="img2" ></img>
          </div>
          <div className="content-panel-two-text">
            <div className="types-of-touchbases">
              Types of Touchbases
            </div>
            <div className="types-of-touchbases-header">
              New ways to engage
            </div>
            <div className="types-of-touchbases-answers">
              It's not just for advice. Choose from a variety of offerings that let you engage
              with your favorite leaders and influencers.
            </div>
          </div>
        </div>
      </div>

      <div className="content-panel-three">
        <div className="content-panel-three-responsive">
          <div className="content-panel-three-image">
            <img src={img3} className = "img3"></img>
          </div>
          <div className="content-panel-three-text">
            <div className="all-categories">
              All Categories
            </div>
            <div className="all-categories-header">
              Something for everyone
            </div>
            <div className="all-categories-answer">
              Forget the days of cold calls and unanswered DMs. Get answers to your
              questions across all lifestyle and business categories, directly from
              the people you admire.
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
