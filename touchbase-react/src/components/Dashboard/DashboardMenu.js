import React, { Component } from 'react';
import { useHistory } from "react-router-dom"
import "./Dashboard.css"
import { DashboardItems } from './DashboardItems.js'
import "./DashboardMenu.css"
import logo from '../../images/TouchbaseIcons/touchbase_logo.png'

class DashboardMenu extends Component {
  render() {
    return (
      <div className="dashboard-menu-content">
        <div className="dashboard-menu">
          <ul >
            {DashboardItems.map((item,index) => {
              return (
                <li className="dashboard-items" key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.title}
                    <img src={item.src} className={item.cName} width="100"/>
                  </a>
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
