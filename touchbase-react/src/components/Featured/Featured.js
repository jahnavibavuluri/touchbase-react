import React from 'react'
import './Featured.css'
import { useHistory } from "react-router-dom";
import { FeaturedPros } from './FeaturedPros.js'

export const Featured = () => {

  const history = useHistory();

  const handleExplore = () => {
    history.push("/explore");
  };

  return (
    <div className="featured-main-body">
      <div className="featured-main-heading">
        Our Featured Pros
      </div>

      <div className="featured-subheading">
        Interested in checking out some of our featured influencers? Click on your interested pro to find out more!
      </div>

      <div className="featured-content">
        <ul >
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
        </ul>
      </div>

      <div className="explore-more">
        <div className="explore-more-content">
          <div className="explore-more-text">
            Want to explore more?
          </div>

          <button className="explore-button" onClick={handleExplore} type="button">Explore</button>
        </div>
      </div>


    </div>

  );
}
