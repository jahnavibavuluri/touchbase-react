import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom"
import "./Dashboard.css"
import DashboardMenu from './DashboardMenu.js'
import DashboardMenuCustomer from './DashboardMenuCustomer.js'
import Calendar from 'react-calendar'
import "./Calendar.css"
import TileContent from "./TileContent.js";

export const Dashboard = () => {

  const history = useHistory();
  const [isInfluencer, setInfluencer] = useState(false);
  let dashboard;

  const dates = [new Date(2021, 4, 25), new Date(2021, 4, 2) , new Date(2021, 4, 27), new Date(2021, 5, 4)]

  const hello = new Date(2021, 4, 25)
  console.log(hello.getDay())

  const tileContent = ({ date, view }) => {
    return <TileContent date={date} selectedDates={dates} />;
  };

  const [value, onChange] = useState(new Date())

  console.log(value)



  //value[1] = new Date(2021, 5, 22)
  //alue[2] = new Date(2021, 5, 25)
  //console.log(value);


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
    } else if (res[0] === 202) {
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
        <div className="dashboard-menu">
          {dashboard}
        </div>

        <div className="username">
          Welcome!
        </div>

        <div className="calendar">
          <Calendar className="react-calendar" calendarType="US" tileContent={tileContent} onChange={onChange}/>
        </div>
      </div>
  );
}
