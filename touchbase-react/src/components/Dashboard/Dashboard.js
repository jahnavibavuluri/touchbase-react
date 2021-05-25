import React, { useEffect, useState } from "react";
//import { useHistory, useLocation } from "react-router-dom"
import "./Dashboard.css"
import DashboardMenu from './DashboardMenu.js'
import DashboardMenuCustomer from './DashboardMenuCustomer.js'
import Calendar from 'react-calendar'
//import 'react-calendar/dist/Calendar.css'
import "./Calendar.css" //to fix the issue of this css file not loading, try copying it directly into react-calendar/dist/Calendar.css and importing that file
import TileContent from "./TileContent.js";

export const Dashboard = () => {

  //const history = useHistory();
  const [isInfluencer, setInfluencer] = useState(false);
  const [value, onChange] = useState(new Date())
  const [datesDict, setDatesDict] = useState({})
  //const [stringDates, setStringDates] = useEffect([])
  let dashboard;

  const dates = []

  const stringDates = []

  for (const [key, value] of Object.entries(datesDict)) {
    stringDates.push(key)
  }

  for (var i = 0; i<stringDates.length; i++) {
    dates.push(new Date(stringDates[i]));
  }


  const tileContent = ({ date, view }) => {
    return <TileContent date={date} selectedDates={dates} />;
  };



  const handleInfluencer = (event) => {
    setInfluencer(true);
  }

  useEffect(() => {
    fetch('/dashboard')
  .then(response => {
    const statusCode = response.status;
    const data = response.json();
    return Promise.all([statusCode, data]);
  })
  .then((res) => {
    if (res[0] === 200) {
      console.log("customer is logged in!")
    } else if (res[0] === 202) {
      setDatesDict(res[1])
      console.log("influencer is logged in!")
      handleInfluencer()
    }
    //console.log(res);
    //console.log(influencerDashboard);
  })
  .catch(error => {
    console.error(error);
    return { name: "network error", description: "" };
  });
},[])

  //console.log(datesDict)

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
          <Calendar className="home-calendar" calendarType="US" tileContent={tileContent} onChange={onChange}/>
        </div>
      </div>
  );
}
