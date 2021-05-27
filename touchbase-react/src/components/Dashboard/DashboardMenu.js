import React, { Component } from 'react';
import { useHistory } from "react-router-dom"
import "./Dashboard.css"
import { DashboardItems } from './DashboardItems.js'
import "./DashboardMenu.css"
import logo from '../../images/TouchbaseIcons/touchbase_logo.png'

class DashboardMenu extends Component {
  render() {
    return (
      <div className="dashboard-menu-content-influencer">
        <div className="dashboard-menu-influencer">
        <img src={logo} className="logo-influencer"width="100"/>
          <ul >
            {DashboardItems.map((item,index) => {
              return (
                <li className="dashboard-items-influencer" key={index}>
                  <div className="div">
                    <a className={item.cName} href={item.url}>
                      <img src={item.src} className="influencer-icons"/>
                      {item.title}
                    </a>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default DashboardMenu
