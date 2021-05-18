import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom"
import "./Dashboard.css"
import DashboardMenu from './DashboardMenu.js'
import DashboardMenuCustomer from './DashboardMenuCustomer.js'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

export const Dashboard = () => {

  const history = useHistory();
  const [isInfluencer, setInfluencer] = useState(false);
  let dashboard;

  const handleInfluencer = (event) => {
    setInfluencer(true);
  }

  useEffect(() => {
    fetch('/dashboard')
  .then(response => {
    const statusCode = response.status;
    return Promise.all([statusCode]);
  })
  .then((res) => {
    if (res[0] === 200) {
      console.log("customer is logged in!")
    } else if (res[0] === 201) {
      console.log("influencer is logged in!")
      handleInfluencer()
    }
    console.log(res);
    //console.log(influencerDashboard);
  })
  .catch(error => {
    console.error(error);
    return { name: "network error", description: "" };
  });
},[])

  if (isInfluencer) {
    dashboard = <DashboardMenu />
  } else {
    dashboard = <DashboardMenuCustomer />
  }

  return (
      <div className="dashboard-content">
        {dashboard}
        <div className="calendar">
          <Calendar/>
        </div>
      </div>
  );
}
