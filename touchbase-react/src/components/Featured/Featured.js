import React, { useEffect, useState } from 'react'
import './Featured.css'
import { useHistory } from "react-router-dom";
import { FeaturedPros } from './FeaturedPros.js'
import Navbar from '../NavBar/Navbar.js'
import Footer from '../Footer/Footer.js'
import placeholder from '../../images/ProfilePics/profile-placeholder.png'

export const Featured = () => {

  const history = useHistory();
  const [influencers, setInfluencers] = useState({});

  const handleExplore = () => {
    history.push("/explore");
  };

  useEffect(() => {
    fetch('/featured')
    .then(response => {
      const statusCode = response.status;
      const data = response.json();
      return Promise.all([statusCode, data]);
    })
    .then((res, data) => {
      //console.log(res[1].data);
      setInfluencers(res[1].data)
    })
    .catch(error => {
      console.error(error);
      return {name: "network error", description:""};
    });
  }, [])

  console.log(influencers)

  /*
  <ul >
    {Object.entries(allMeetings).map( ([key, value]) => {
      return (
        <IndividualMeeting type="Group" icon={groupicon} date={value.date} time="time" title={value.title}/>
      )
    })}
  </ul>
  */

  return (
    <div className="featured-main-body">
      <Navbar/>
      <div className="featured-main-heading">
        Our Featured Pros
      </div>

      <div className="featured-subheading">
        Interested in checking out some of our featured influencers? Click on your interested pro to find out more!
      </div>

      <div className="featured-content">

        <ul>
          {Object.entries(influencers).map( ([key, value]) => {
            return (
              <a className="featured-pros-div" key={key} href= {"/seller/" + value.id}>
                <img src={placeholder} width="200" className="featured-pro"/>
                <div className="featured-influencer-name">
                  {value.firstName} {value.lastName}
                </div>
                <div className="featured-influencer-category">
                  <div>{value.categories[0]}</div>
                  <div>{value.categories[1]}</div>
                  <div>{value.categories[2]}</div>
                </div>
              </a>
            )
          })}
      </ul>

        {/*<ul >
          {FeaturedPros.map((item,index) => {
            return (
              <div className="featured-pros-div" key={index}>
                <img src={item.src} width="200" className={item.cName}/>
                <div className="influencer-name">
                  {item.title}
                </div>
                <div className="influencer-category">
                  {item.category}
                </div>
              </div>
            )
          })}
        </ul>*/}
      </div>

      <div className="explore-more">
        <div className="explore-more-content">
          <div className="explore-more-text">
            Want to explore more?
          </div>

          <button className="explore-button" onClick={handleExplore} type="button">Explore</button>
        </div>
      </div>

      <Footer />
    </div>

  );
}
