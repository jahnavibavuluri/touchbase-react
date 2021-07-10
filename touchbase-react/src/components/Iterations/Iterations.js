import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom"
import {Navbar} from '../NavBar/Navbar.js'
import Footer from '../Footer/Footer.js'
import './Iterations.css'
import Booking from './Booking.js'

export const Iterations = ({match:{params:{id1, id2}}}) => {

  const history = useHistory();

  //let influencerName = "John Smith"
  //let categories = ["Gaming, Streaming, Technology, Cooking, Baking, Food"]
  //let touchbase = "How to make a webpage with React!"
  const [name, setName] = useState("")
  const [categories, setCategories] = useState("")
  const [bio, setBio] = useState("")
  const [twitterHandle, setTwitterHandle] = useState("")
  const [instagramHandle, setInstagramHandle] = useState("")
  const [tbtitle, setTbTitle] = useState("")
  const [iteration, setIterations] = useState({})
  const [cost, setCost] = useState(0)
  //const [iterationID, setIterationID] = useState(0)

  useEffect(() => {
    fetch(`/api/seller/${id1}/iterations/${id2}`)
    .then(response => {
      const statusCode = response.status;
      const data = response.json();
      return Promise.all([statusCode, data]);
    })
    .then((res, data) => {
      console.log(res[1]);
      setName(res[1].influencerName)
      setCategories(res[1].categories)
      setTwitterHandle(res[1].twitterHandle)
      setInstagramHandle(res[1].instagramHandle)
      setTbTitle(res[1].touchbaseTitle)
      setIterations(res[1].iterations)
      setCost(res[1].cost)
      if (res[0] === 404) {
        history.push('/error')
      }
      //setIterationID(id2)
    })
    .catch(error => {
      console.error(error);
      return {name: "network error", description:""};
    });
  }, [])

  return(
    <div className="header-footer">
      <Navbar />

      <div className="iterations-content">

      <div className="influencer-left-side-info">
        {/*<a href='/'>
          <img src={logo} width="200" height="60"/>
        </a>*/}
        <div className="seller-name">{name}</div>
        <div className="seller-handles"><b>Twitter: </b>{twitterHandle}</div>
        <div className="seller-handles"><b>Instagram: </b>{instagramHandle}</div>
        <div className="seller-categories">
          <b>Categories:</b>
          {Object.entries(categories).map( ([key, value]) => {
            //setNextIteration(name.nextIteration);
            return <div>{value}</div>;
          })}
        </div>
        <div className="seller-bio">{bio}</div>
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
              {Object.entries(iteration).map( ([key, value]) => {
                return <Booking key={key} tb_title={tbtitle} cost={cost} date={value.date} start={value.startTime} end={value.endTime} current={value.numParticipants} open={value.remainingSpace} iter_id={value.iteration_id}/>
              })}


            </div>

          </div>
        </div>

        </div>

      {/*<Footer/>*/}
    </div>
  );

}
