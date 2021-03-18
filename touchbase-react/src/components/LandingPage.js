import React from 'react';
//import logo from 'touchbase-react/src/logo.svg';
import './LandingPage.css';
import img1 from './touchbase_img_Q&A.png';
import img2 from './touchbase_img_touchbases.png'
import img3 from './touchbase_img_dms.png'
import logo from './touchbase_logo.png'

export const LandingPage = ({}) => {
  return (
    <div className="landingPage">
      <header className="landingPage-header">
        <img src={logo} width ="200" height="60"></img>
      </header>
      <div className="nav">
        Meet with your favorite pros & influencers
        <div className='nav1'>
          Your questions. Their personalized advice, consulting, and insights. (And for a worthy cause.)
        </div>
          <div className="nav-button">
            {/*BUTTON DOES NOT CHANGE COLOR IDK WHY IN THE CSS FILE*/}
            <button type="button">Sign Up</button>
          </div>
      </div>
      {/*<div className="landingPage-content">*/}
        <div className="content-panel-one">
          <div className="content-panel-one-image">
            <img src={img1} width="700" height="400"></img>
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

        <div className="content-panel-two">
          <div className="content-panel-two-image">
            <img src={img2} width="800" height="400"></img>
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

        <div className="divider">
          Touchbase democratizes access to industry experts and influencers.
        </div>

        <div className="content-panel-three">
          <div className="content-panel-three-image">
            <img src={img3} width="400" height="550"></img>
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


      {/*</div>*/}
      <div className="footer">
      </div>
      <div className="footer2">
        About     Us     FAQ    Terms & conditions     Privacy policy      Become an expert         Copyright &copy; 2021 Touchbase, Inc.
      </div>

    </div>

  );
}
