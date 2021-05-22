import React, { Component } from "react";
import { differenceInCalendarDays } from 'date-fns';

const isSameDay = a => b => {
  return differenceInCalendarDays(a, b) === 0;
}

class TileContent extends Component {
  render() {
    const { selectedDates, date } = this.props;
    const toChange = selectedDates.filter(isSameDay(date)).length > 0;
    return toChange ? <p>Touchbase!</p> : <></>;
  }
}

export default TileContent;
