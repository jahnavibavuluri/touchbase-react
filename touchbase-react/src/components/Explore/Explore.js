import React, { useEffect, useState } from 'react'
import './Explore.css'
import { useHistory } from "react-router-dom";
import { ExploreExampleInfluencers } from './ExploreExampleInfluencers.js'
import {Navbar} from '../NavBar/Navbar.js'
import Footer from '../Footer/Footer.js'
import placeholder from '../../images/ProfilePics/profile-placeholder.png'

export const Explore = () => {

  const history = useHistory();
  const [influencers, setInfluencers] = useState({});

  useEffect(() => {
    fetch('/explore')
    .then(response => {
      const statusCode = response.status;
      const data = response.json();
      return Promise.all([statusCode, data]);
    })
    .then((res, data) => {
      //console.log(res[1].influencers);
      setInfluencers(res[1].influencers)
    })
    .catch(error => {
      console.error(error);
      return {name: "network error", description:""};
    });
  }, [])

  console.log(influencers)

  return (

    <div className="explore-header-footer">
      <Navbar />

      <div className="explore-main-content">

        <div className="all-categories-content">
          Explore More Pros
        </div>

        <div className="explore-description">
          Our influencers are here for you. Whether it be needing advice with fashion or finding the perfect recipe to impress your family, they have you covered.
        </div>


        <div className="explore-content">

          <ul>
            {Object.entries(influencers).map( ([key, value]) => {
              return (
                <a className="explore-pros-div" key={key} href= {"/seller/" + value.influencer_id}>
                  <img src={placeholder} width="200" className="explore-pro"/>
                  <div className="explore-influencer-name">
                    {value.influencer_name}
                  </div>
                  <div className="explore-influencer-category">
                    <div>{value.categories[0]}</div>
                    <div>{value.categories[1]}</div>
                    <div>{value.categories[2]}</div>
                  </div>
                </a>
              )
            })}
          </ul>


        </div>


        {/*<div className="category">
          <div className="category-name">
            Art
          </div>
          <div className="category-influencers">
            <ul >
              {ExploreExampleInfluencers.map((item,index) => {
                return (
                  <li className="influencer-items" key={index}>
                    <a className={item.cName} href={item.url}>
                      {item.title}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className="category">
          <div className="category-name">
            Fitness
          </div>
          <div className="category-influencers">
            <ul >
              {ExploreExampleInfluencers.map((item,index) => {
                return (
                  <li className="influencer-items" key={index}>
                    <a className={item.cName} href={item.url}>
                      {item.title}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className="category">
          <div className="category-name">
            Home Decor
          </div>
          <div className="category-influencers">
            <ul >
              {ExploreExampleInfluencers.map((item,index) => {
                return (
                  <li className="influencer-items" key={index}>
                    <a className={item.cName} href={item.url}>
                      {item.title}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>*/}

      </div>
      <Footer />
    </div>

  );
}
