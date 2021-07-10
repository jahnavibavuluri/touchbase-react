import React, { useState, useEffect } from 'react';
import {Navbar} from '../NavBar/Navbar.js'
import Footer from '../Footer/Footer.js'
import './InfluencerTouchbases.css'
import oooicon from '../../images/TouchbaseIcons/one-on-one-icon.png'
import groupicon from '../../images/TouchbaseIcons/group-icon.png'
import grouphangouticon from '../../images/TouchbaseIcons/group-hangout-icon.png'
import Touchbase from './Touchbase'
import logo from '../../images/TouchbaseIcons/touchbase_logo.png';

export const InfluencerTouchbases = ({match:{params:{id}}}) => {

  //let influencerName = "John Smith"
  //let categories = ["Gaming, Streaming, Technology, Cooking, Baking, Food"];
  const [oneList, setOneList] = useState({});
  const [classList, setClassList] = useState({});
  const [breakoutList, setBreakoutList] = useState({});
  const [name, setName] = useState("")
  const [categories, setCategories] = useState("")
  const [bio, setBio] = useState("")
  const [twitterHandle, setTwitterHandle] = useState("")
  const [instagramHandle, setInstagramHandle] = useState("")
  const [influencer_id, setInfluencerId] = useState(0);
  //props.id = 4


  useEffect(() => {
    fetch(`/api/seller/${id}`)
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
      setBio(res[1].bio)
      setTwitterHandle(res[1].twitterHandle)
      setInstagramHandle(res[1].instagramHandle)
      setInfluencerId(res[1].influencer_id)
    })
    .catch(error => {
      console.error(error);
      return {name: "network error", description:""};
    });
  }, [])

  //console.log(oneList)
  //console.log(classList)
  //console.log(breakoutList)

  return (

    <div className="influencer-touchbases-header-footer">
      <Navbar />

      <div className="influencer-touchbases-content">

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

        <div className="your-touchbases-grid-content-influencer">

          <div className="your-touchbases-one-on-one-influencer">
            <div className="one-on-one-heading-influencer">
              <div>1:1</div>
            </div>
            <div className="ind-one-on-one-influencer">
              {Object.entries(oneList).map( ([key, value]) => {
                //setNextIteration(name.nextIteration);
                return <Touchbase key={key} title={value.touchbase_title} description={value.touchbase_description} cost={value.cost} spots={value.openSpots} nextTime={(value.nextIterationTime)} nextDate={(value.nextIterationDate).substring(0, (value.nextIterationDate.length - 13))} influencer_id={id} touchbase_id={value.touchbase_id}/>;
              })}
            </div>
          </div>

          <div className="your-touchbases-class-influencer">
            <div className="class-heading-influencer">
              <div>Class</div>
            </div>
            <div className="ind-class-influencer">
              {Object.entries(classList).map( ([key, value]) => {
                return <Touchbase key={key} title={value.touchbase_title} description={value.touchbase_description} cost={value.cost} spots={value.openSpots} nextTime={(value.nextIterationTime)} nextDate={(value.nextIterationDate).substring(0, (value.nextIterationDate.length - 13))} influencer_id={id} touchbase_id={value.touchbase_id}/>;
              })}
            </div>
          </div>



          <div className="your-touchbases-breakout-influencer">
            <div className="breakout-heading-influencer">
              <div>Breakout</div>
            </div>
            <div className="ind-breakout-influencer">
              {Object.entries(breakoutList).map( ([key, value]) => {
                return <Touchbase key={key} title={value.touchbase_title} description={value.touchbase_description} cost={value.cost} spots={value.openSpots} nextTime={(value.nextIterationTime)} nextDate={(value.nextIterationDate).substring(0, (value.nextIterationDate.length - 13))} influencer_id={id} touchbase_id={value.touchbase_id}/>;
              })}
            </div>
          </div>

        </div>


        {/*<div className="influencer-heading">
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

        </div>*/}

      </div>

      <div className="seller-footer">
        {/*<Footer />*/}
      </div>
    </div>
  );

}
