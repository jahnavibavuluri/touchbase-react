import React, { Component } from "react";
import './EventBanner.css'

const EventBanner = (props) => {

  return (
    <div className={"tile-content-component"}>{props.content}</div>
  );
}

export default EventBanner;
