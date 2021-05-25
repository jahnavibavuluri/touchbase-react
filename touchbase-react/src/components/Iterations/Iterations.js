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
        <div className="main-content">
          <div className="influencer-heading">
            <div className="influencer-name">{influencerName}</div>
            <div className="influencer-categories">{categories}</div>
            <div className="available-bookings-header">
              Available Bookings for: {touchbase}
            </div>
          </div>

          <div className="bookings">
            <Booking />
            <Booking />
            <Booking />
            <Booking />
          </div>

        </div>


      <Footer/>
    </div>
  );

}
