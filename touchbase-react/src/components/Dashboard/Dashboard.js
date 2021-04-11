import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom"
import "./Dashboard.css"
import DashboardMenu from './DashboardMenu.js'

export const Dashboard = () => {
  return (
    <div className="dashboard-menu">
      <DashboardMenu/>
    </div>
  );
  /*
  const [dashboard, setDashboard] = useState("");
  const history = useHistory();
  const location = useLocation();
  let userID = location.id;

  useEffect(() => {
    console.log("the userID is: " + userID)
    console.log(location.pathname)
    fetch('/dashboard/' + location.id).then(res => res.json()).then(data => {
      console.log(data.state);
      setDashboard(data.state);
    });
  }, [location]);


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
      pathname: '/dashboard/' + userID + '/touchbases',
      id: userID
    });
  }

  const goToMeetings = (event) => {
    history.push({
      pathname: '/dashboard/' + userID + '/meetings',
      id: userID
    });
  }

  const goToProfile = (event) => {
    history.push({
      pathname: '/dashboard/' + userID + '/touchbases',
      id: userID
    });
  }

  const goHome = (event) => {
    history.push({
      pathname: '/dashboard/' + userID,
      id: userID
    });
  }


  return (
    <div className="dashboard-content">

      <div className="dashboard-welcome">
        Welcome to Touchbase!
      </div>

      <div className="dashboard-menu">
      <ul >
        <li className="dashboard-items">
          <a className='dashboard-links' href={'/dashboard/' + userID}>
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
    </div>
  );
  */
}
