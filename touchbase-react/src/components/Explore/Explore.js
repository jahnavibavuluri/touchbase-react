import React from 'react'
import './Explore.css'
import { useHistory } from "react-router-dom";
import { ExploreExampleInfluencers } from './ExploreExampleInfluencers.js'
import Navbar from '../NavBar/Navbar.js'
import Footer from '../Footer/Footer.js'

export const Explore = () => {

  const history = useHistory();

  return (

    <div className="explore-header-footer">
      <Navbar />

      <div className="explore-main-content">

        <div className="all-categories-content">
          All Categories
        </div>

        <div className="category">
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
        </div>

      </div>
      <Footer />
    </div>

  );
}
