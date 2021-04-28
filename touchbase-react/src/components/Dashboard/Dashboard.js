import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom"
import "./Dashboard.css"
import DashboardMenu from './DashboardMenu.js'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

export const Dashboard = () => {
  return (
      <div className="dashboard-content">
        <DashboardMenu/>
        <div className="calendar">
          <Calendar/>
        </div>
      </div>
  );
}
