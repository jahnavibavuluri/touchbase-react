import React, { useState, useEffect } from 'react';
import Navbar from '../NavBar/Navbar.js'
import Footer from '../Footer/Footer.js'
import './InfluencerTouchbases.css'
import oooicon from '../../images/TouchbaseIcons/one-on-one-icon.png'
import groupicon from '../../images/TouchbaseIcons/group-icon.png'
import grouphangouticon from '../../images/TouchbaseIcons/group-hangout-icon.png'
import Touchbase from './Touchbase'

export const InfluencerTouchbases = ({match:{params:{id}}}) => {

  //let influencerName = "John Smith"
  //let categories = ["Gaming, Streaming, Technology, Cooking, Baking, Food"];
  const [oneList, setOneList] = useState({});
  const [classList, setClassList] = useState({});
  const [breakoutList, setBreakoutList] = useState({});
  const [name, setName] = useState("")
  const [categories, setCategories] = useState("")
  //props.id = 4


  useEffect(() => {
    fetch(`/seller/${id}`)
    .then(response => {
      const statusCode = response.status;
      const data = response.json();
      return Promise.all([statusCode, data]);
    })
    .then((res, data) => {
      console.log(res[1]);
      setOneList(res[1].oneOnones)
      setClassList(res[1].classes)
      setBreakoutList(res[1].breakouts)
      setName(res[1].firstName + " " + res[1].lastName)
      setCategories(res[1].categories)
    })
    .catch(error => {
      console.error(error);
      return {name: "network error", description:""};
    });
  }, [])

  console.log(oneList)
  console.log(classList)
  console.log(breakoutList)

  return (

    <div className="influencer-touchbases-header-footer">
      <Navbar />

      <div className="influencer-touchbases-content">

        <div className="influencer-heading">
          <div className="influencer-name">
            {name}
          </div>
          <div className="influencer-categories">
            {categories}
          </div>
        </div>

        <div className="touchbases">
          <div className="individual-touchbase">
            <div className="individual-touchbase-heading">
              1:1 Touchbases
            </div>
            <ul >
              {Object.entries(oneList).map( ([key, value]) => {
                return (
                  <Touchbase key={key} title={value.touchbase_title} description={value.touchbase_description} openSpots={value.openSpots} nextDate={value.nextIterationDate} nextTime={value.nextIterationTime} cost={value.cost}/>
                )
              })}
            </ul>
          </div>

          <br/>
          <br/>

          <div className="individual-touchbase">
            <div className="individual-touchbase-heading">
              Class Touchbases
            </div>
            <ul >
              {Object.entries(classList).map( ([key, value]) => {
                return (
                  <Touchbase key={key} title={value.touchbase_title} description={value.touchbase_description} openSpots={value.openSpots} nextDate={value.nextIterationDate} nextTime={value.nextIterationTime} cost={value.cost}/>
                )
              })}
            </ul>
          </div>

          <br/>
          <br/>

          <div className="individual-touchbase">
            <div className="individual-touchbase-heading">
              Breakout Touchbases
            </div>
            <ul >
              {Object.entries(breakoutList).map( ([key, value]) => {
                return (
                  <Touchbase key={key} title={value.touchbase_title} description={value.touchbase_description} openSpots={value.openSpots} nextDate={value.nextIterationDate} nextTime={value.nextIterationTime} cost={value.cost}/>
                )
              })}
            </ul>
          </div>

          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>

        </div>

      </div>


      <Footer />
    </div>
  );

}
