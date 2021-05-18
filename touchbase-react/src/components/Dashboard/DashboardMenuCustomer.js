import React, { Component } from 'react';
import { useHistory } from "react-router-dom"
import { DashboardItemsCustomer } from './DashboardItemsCustomer.js'
import "./DashboardMenuCustomer.css"
import logo from '../../images/TouchbaseIcons/touchbase_logo.png'

class DashboardMenuCustomer extends Component {
  render() {
    return (
      <div className="dashboard-menu-content">
        <div className="dashboard-menu">
          <ul >
            {DashboardItemsCustomer.map((item,index) => {
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

export default DashboardMenuCustomer
