import React, { useEffect, useState } from "react";
import './MeetingsUpcoming.css'
import { Link, useHistory } from "react-router-dom"
import favicon from '../../images/TouchbaseIcons/favicon-black.png'
import { MenuInfluencer } from '../Menu/MenuInfluencer.js'
import { MenuCustomer } from '../Menu/MenuCustomer.js'
import IndividualMeetingUpcoming from './IndividualMeetingUpcoming'

export const MeetingsUpcoming = props => {

  let dashboard;
  const history = useHistory();
  const [isInfluencer, setInfluencer] = useState(false);
  const [upcomingMeetings, setUpcomingMeetings] = useState({});
  let meeting;

  const handleInfluencer = (event) => {
    setInfluencer(true);
  }

  useEffect(() => {
    fetch('/api/dashboard/home')
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
    } else {
      history.push('/error')
    }
    console.log(res);
    //console.log(influencerDashboard);
  })
  .catch(error => {
    console.error(error);
    return { name: "network error", description: "" };
  });
},[])


  useEffect(() => {
    fetch('/api/dashboard/meetings')
    .then(response => {
      const statusCode = response.status;
      const data = response.json();
      return Promise.all([statusCode, data]);
    })
    .then((res, data) => {
      console.log(res[1]);
      setUpcomingMeetings(res[1].future_iterations)
      //setMeetings(res[1].iterations)
    })
    .catch(error => {
      console.error(error);
      return {name: "network error", description:""};
    });
  }, [])


  if (isInfluencer) {
    dashboard = <MenuInfluencer />
  } else {
    dashboard = <MenuCustomer />
  }

  function getType(type) {
    let touchbase;
    switch(type) {
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
    return touchbase;
  }


  console.log(upcomingMeetings)

  /*if (isInfluencer === true) {
    meeting = <IndividualMeetingUpcoming key={key}
                type={getType(value.tb_type)}
                date={(value.date).substring(0, value.date.length-13)}
                startTime={(value.startTime).substring(0, (value.startTime.length-3))}
                customers={Object.entries(customers).map(([key, value]) => {return (<div>{value}</div>)})}
                endTime={(value.endTime).substring(0,(value.endTime.length-3))}
                title={value.title}
                tb_id={value.touchbase_id}
                iter_id={value.iteration_id}
              />
  } else {
    meeting = <IndividualMeetingUpcoming key={key}
                type={getType(value.tb_type)}
                date={(value.date).substring(0, value.date.length-13)}
                startTime={(value.startTime).substring(0, (value.startTime.length-3))}
                customers={value.customers}
                endTime={(value.endTime).substring(0,(value.endTime.length-3))}
                title={value.title}
                tb_id={value.touchbase_id}
                iter_id={value.iteration_id}
              />
  }*/

  //Object.entries(upcomingMeetings).map( ([key, value]) => {

  return (
    <div>
      {dashboard}

      <div className="meet-heading">
        Upcoming Meetings
      </div>

      <div className="meet-links">
        <a className="meet-link-active" href='/dashboard/meetings'>Upcoming</a>
        <a className="meet-link" href='/dashboard/past-meetings'>Past</a>
      </div>

      <div className="ind-meet-content">

        <div className="ind-meet-title">
          Title
        </div>

        <div className="ind-meet-type">
          Type
        </div>

        <div className="ind-meet-part">
          Current participants
        </div>

        <div className="ind-meet-date">
          Date
        </div>

        <div className="ind-meet-start-time">
          Start at
        </div>

        <div className="ind-meet-end-time">
          End at
        </div>

        <div className="ind-meet-join">
          Join
        </div>

      </div>

      <div className="ind-meeting-content-upcoming">
        <ul >

          {!isInfluencer && Object.entries(upcomingMeetings).map( ([key, value]) => {
            return (
              <IndividualMeetingUpcoming key={key}
              type={getType(value.tb_type)}
              date={(value.date).substring(0, value.date.length-13)}
              startTime={(value.startTime)}
              customers={value.customers}
              endTime={(value.endTime)}
              title={value.title}
              tb_id={value.touchbase_id}
              iter_id={value.iteration_id}/>
            )
          })}

          {isInfluencer && Object.entries(upcomingMeetings).map( ([key, value]) => {
            return (
              <IndividualMeetingUpcoming key={key}
              type={getType(value.tb_type)}
              date={(value.date).substring(0, value.date.length-13)}
              startTime={(value.startTime)}
              customers= <div>{value.customers.length === 0 ? 0 : Object.entries(value.customers).map(([key, value]) => {return (<div>{value}</div>)})}</div>
              endTime={(value.endTime)}
              title={value.title}
              tb_id={value.touchbase_id}
              iter_id={value.iteration_id}/>
            )
          })}


        </ul>
        {Object.keys(upcomingMeetings).length === 0 && <div className="no-upcoming-meetings">No Upcoming Meetings!</div>}
      </div>

    </div>
  );

}

/*
const toChange = selectedDates.filter(isSameDay(date)).length > 0;

//console.log(content)
//console.log("the date is inside tilecontent: " + date);
//console.log("the selecteddates are inside tilecontent: " +selectedDates);
return toChange ? <div>
                    {content.map(function(name, index){
                      return <EventBanner content={name}/>;
                    })}
                  </div> : <></>;

{(value.date).substring(0, (value.date.length - 13))}
nextTime={(value.nextIterationTime).substring(0, (value.nextIterationTime.length-3))} nextDate={(value.nextIterationDate).substring(0, (value.nextIterationDate.length - 13))}*/
