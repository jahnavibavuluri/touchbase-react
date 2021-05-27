import React, { useEffect, useState } from "react";
//import { useHistory, useLocation } from "react-router-dom"
import "./Dashboard.css"
import DashboardMenu from './DashboardMenu.js'
import DashboardMenuCustomer from './DashboardMenuCustomer.js'
import Calendar from 'react-calendar'
//import 'react-calendar/dist/Calendar.css'
import "./Calendar.css" //to fix the issue of this css file not loading, try copying it directly into react-calendar/dist/Calendar.css and importing that file
import TileContent from "./TileContent.js";
import { differenceInCalendarDays } from 'date-fns';
import EventPopup from './EventPopup.js'
import { MenuInfluencer } from '../Menu/MenuInfluencer.js'
import { MenuCustomer } from '../Menu/MenuCustomer.js'

export const Dashboard = () => {

  //const history = useHistory();
  const [isInfluencer, setInfluencer] = useState(false);
  const [value, onChange] = useState(new Date())
  const [datesDict, setDatesDict] = useState({})
  const [isOpenPopup, setIsOpenPopup] = useState(false)
  const [iteration, setIteration] = useState({})
  //let iteration = {}
  //const [stringDates, setStringDates] = useEffect([])
  let dashboard;

  const dates = []

  const stringDates = {}

  for (const [key, value] of Object.entries(datesDict)) {
   //console.log("key is: " + key)
   //console.log("value is: " + value)
   stringDates[key] = value.length
  }

  //console.log(stringDates)

  for (const [key, value] of Object.entries(stringDates)) {
    //dates.push(new Date(stringDates[i]));
    //dates.push(new Date(stringDates[i]));
    for (var i = 0; i<value; i++) {
      dates.push(new Date(key))
    }
    //dates.push(key)
  }

  //for each date return a dict with a number and the type of tb
  function getType (date) {
    let dict = []
    for (const [key, value] of Object.entries(datesDict)) {
      //console.log("key is: " + new Date(key))
      //console.log("date is: " + date)
      if (differenceInCalendarDays(new Date(key), date) === 0) {
        //console.log("the length is: " + value.length)
        for (var i = 0; i<value.length; i++) {
          let touchbase;
          switch(value[i].type) {
            case "oneOnone":
              touchbase = "1:1"
              break;
            case "class":
              touchbase="Class"
              break
            case "breakout":
              touchbase="Breakout";
              break
            default:
              touchbase = "Touchbase!"
              break;
          }
          dict[i] = touchbase
        }

        //console.log(value.length)
      }
    }
    //console.log(dict)
    return dict;
  }


  const tileContent = ({ date, view }) => {
    return <TileContent date={date} selectedDates={dates} content={getType(date)} />;
  };

  const handleDatePopup = (date) => {
    setIteration({})
    console.log(date)
    togglePopup();
    for (const [key, value] of Object.entries(datesDict)) {
      if (differenceInCalendarDays(new Date(key), date) === 0) {
        console.log(Object.keys(datesDict).indexOf(key))
        setIteration(Object.entries(datesDict)[Object.keys(datesDict).indexOf(key)])
      }
    }

  }

  console.log(iteration)

  const togglePopup = () => {
    setIsOpenPopup(!isOpenPopup)
  }


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
    console.log(res);
    //console.log(influencerDashboard);
  })
  .catch(error => {
    console.error(error);
    return { name: "network error", description: "" };
  });
},[])

  //console.log(datesDict)

  if (isInfluencer) {
    dashboard = <MenuInfluencer />
  } else {
    dashboard = <MenuCustomer />
  }

  return (
      <div className="dashboard-content">
        <div className="dashboard-menu">
          {dashboard}
        </div>

        <div className="username">
          Home 
        </div>

        <div className="calendar">
          <Calendar className="home-calendar" calendarType="US" tileContent={tileContent} onChange={onChange} onClickDay={handleDatePopup}/>
        </div>
        {isOpenPopup && <EventPopup handleClose={togglePopup} dict={iteration}/>}
      </div>
  );
}
