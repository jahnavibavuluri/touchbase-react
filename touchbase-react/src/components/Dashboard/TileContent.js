import React, { Component } from "react";
import { differenceInCalendarDays } from 'date-fns';
import './TileContent.css'
import EventBanner from './EventBanner.js'

const isSameDay = a => b => {
  return differenceInCalendarDays(a, b) === 0;
}

class TileContent extends Component {
  render() {
    const { selectedDates, date, content } = this.props;


    /*const findRepetitions = (selectedDates, date) => {
      let count = 0;
      for (date in selectedDates) {
        if (selectedDates.filter(isSameDay(date)).length > 0) {
          count++
        }
      }
      return count;
    }*/

    const toChange = selectedDates.filter(isSameDay(date)).length > 0;

    //console.log(content)
    //console.log("the date is inside tilecontent: " + date);
    //console.log("the selecteddates are inside tilecontent: " +selectedDates);
    return toChange ? <div>
                        {content.map(function(name, index){
                          return <EventBanner content={name}/>;
                        })}
                      </div> : <></>;
  }
}

export default TileContent;
