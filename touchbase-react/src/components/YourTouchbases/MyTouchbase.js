import React from 'react';
import './MyTouchbase.css';

const MyTouchbase = props => {

  return(
    <div className="my-touchbase-content-ind">
      <div className="my-touchbase-content-ind-title">{props.title}</div>
      <div>{props.description}</div>
      <div>Cost: ${props.cost}</div>
      <div>{props.next}</div>
      <div className="my-touchbase-content-buttons">
        <button className="my-touchbase-content-edit">Edit</button>
        <button className="my-touchbase-content-delete">Delete</button>
      </div>
    </div>
  );

}

export default MyTouchbase;
