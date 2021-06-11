import React, { useState } from 'react';
import Navbar from '../NavBar/Navbar.js'
import Footer from '../Footer/Footer.js'
import './Iterations.css'
import Booking from './Booking.js'

export const Iterations = () => {

  let influencerName = "John Smith"
  let categories = ["Gaming, Streaming, Technology, Cooking, Baking, Food"]
  let touchbase = "How to make a webpage with React!"

  return(
    <div className="header-footer">
      <Navbar />

      <div className="iterations-content">

      <div className="influencer-left-side-info-iteration">
        {/*<a href='/'>
          <img src={logo} width="200" height="60"/>
        </a>*/}
        <div className="seller-name">Jahnavi Bavuluri</div>
        <div className="seller-handles">@Twitter_Handle</div>
        <div className="seller-handles">@Instagram_Handle</div>
        <div className="seller-categories">
          {Object.entries(categories).map( ([key, value]) => {
            //setNextIteration(name.nextIteration);
            return <div>{value}</div>;
          })}
        </div>
        <div className="seller-bio">Hi! My name is ____ and I love to cook! Come join me and learn new recipes with me!</div>
      </div>


        <div className="main-content">
          <div className="main-content-responsive">
            <div className="ind-meet-content-iterations">

              <div className="ind-meet-title">
                Title
              </div>

              <div className="ind-meet-date">
                Date
              </div>

              <div className="ind-meet-start-time">
                Start at
              </div>

              <div className="ind-meet-end-time">
                End at
              </div>

              <div className="ind-meet-part">
                Open Spots
              </div>

              <div className="ind-meet-cost">
                Cost
              </div>

              <div className="ind-meet-join">
                Book
              </div>

            </div>

        {/*  <div className="ind-meeting-content-upcoming">
            <ul >
              {Object.entries(upcomingMeetings).map( ([key, value]) => {
                return (
                  <IndividualMeetingUpcoming key={key} type={getType(value.tb_type)} date={(value.date).substring(0, (value.date.length - 13))} startTime={value.startTime} endTime={value.endTime} title={value.title} customers={value.customers.length}/>
                )
              })}
            </ul>
            {Object.keys(upcomingMeetings).length === 0 && <div className="no-upcoming-meetings">No Upcoming Meetings!</div>}
          </div>*/}

            <div className="bookings">
              <Booking />
              <Booking />
              <Booking />
              <Booking />
            </div>

          </div>
        </div>

        </div>

      <Footer/>
    </div>
  );

}
