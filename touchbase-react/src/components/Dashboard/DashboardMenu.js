import React, { Component } from 'react';
import { useHistory } from "react-router-dom"
import "./Dashboard.css"
import { DashboardItems } from './DashboardItems.js'

class DashboardMenu extends Component {
  render() {
/*
    const history = useHistory();

    const handleLogout = (event) => {
      fetch('/logout')
        .then(res => res.json())
        .then(data => {
          console.log(data.state)
          history.push('/')
          //if(data.state === 'user in session!') {
            //history.push('/dashboard')
          //}
        });
      }

    const goToTouchbases = (event) => {
      history.push({
        pathname: '/dashboard/touchbases',
        id: userID
      });
    }

    const goToMeetings = (event) => {
      history.push({
        pathname: '/dashboard/meetings',
        id: userID
      });
    }

    const goToProfile = (event) => {
      history.push({
        pathname: '/dashboard/touchbases',
        id: userID
      });
    }

    const goHome = (event) => {
      history.push({
        pathname: '/dashboard/',
        id: userID
      });
    }*/

    return (
      <div className="dashboard-menu-content">
        <div className="dashboard-menu">
        {/*
        <ul >
          <li className="dashboard-items">
            <a className='dashboard-links' href={'/dashboard'}>
              Home
            </a>
          </li>
          <li className="dashboard-items">
            <a className='dashboard-links' onClick={goToTouchbases}>
              Your Touchbases
            </a>
          </li>
          <li className="dashboard-items">
            <a className='dashboard-links' onClick={goToMeetings}>
              Meetings
            </a>
          </li>
          <li className="dashboard-items">
            <a className='dashboard-links' onClick={goToProfile}>
              Profile
            </a>
          </li>
          <li className="dashboard-items">
            <a className='dashboard-links' onClick={handleLogout}>
              Logout
            </a>
          </li>
        </ul>
        */}
          <ul >
            {DashboardItems.map((item,index) => {
              return (
                <li className="dashboard-items" key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.title}
                  </a>
                </li>
              )
            })}
          </ul>

        </div>
        {/*<button onClick={handleLogout} type="button">Logout</button>
        {DashboardItems.map((item,index) => {
          return (
            <li className="dashboard-items" key={index}>
              <a className={item.cName} href={item.url} onClick={handleLogout}>
                {item.title}
              </a>
            </li>
          )
        })}
        */}
      </div>
    );
  }
}

export default DashboardMenu
